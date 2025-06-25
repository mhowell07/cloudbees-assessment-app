import { GithubUser } from '@/types/github';
import Link from 'next/link';
import { FaGithubSquare } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image'

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
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"><Image src={user.avatar_url} width={50} height={50} alt={`${user.login}'s Avatar Image`} className="rounded-full" /></td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{user.login}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
              <div className="group w-fit">
                <Link href={`/user/${user.login}`} className="flex items-center gap-1 dark:text-neutral-200 group-hover:text-blue-700 w-fit">View <FaArrowRight size={12} className="text-gray-800 group-hover:text-blue-700 -rotate-45 group-hover:rotate-0 group-hover:trasition-all transition-all" /></Link>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
              <div className="flex justify-end">
                <a href={user.html_url} className="w-fit hover:text-blue-700 trasition-all hover:transition-all" target="_blank"><FaGithubSquare size={25} className="hover:cursor-pointer" /></a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable;