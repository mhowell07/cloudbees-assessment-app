import { GithubUser } from '@/types/github';
import Link from 'next/link';
import { FaGithubSquare } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

type UserTbableProps = {
  users: GithubUser[];
}

const UserTable = ({ users }: UserTbableProps) => {

  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
      <thead>
        <tr>
          <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Avatar</th>
          <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Username</th>
          <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Details</th>
          <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Github</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">John Brown</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.login}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"><Link href={`/user/${user.login}`} className=" flex items-center gap-1">View <FaArrowRight size={12} className="text-gray-800" /></Link></td>
            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
              <a href={user.html_url} className="flex justify-end"><FaGithubSquare size={20} className="hover:cursor-pointer"/></a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable;