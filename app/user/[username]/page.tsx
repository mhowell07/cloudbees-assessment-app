import { GithubUserDetail } from "@/types/github";
import Image from "next/image";


type UserPageProps = {
  params: {
    username: string;
  };
};

const UserPage = async ({ params }: UserPageProps) => {

  // Await params to make sure we have it before trying to access it
  const { username } = await params;

  // Get the data from the User route handler
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${username}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${params.username}`);
  }

  const user: GithubUserDetail = await response.json();

  console.log(user);


  return (
    <div className="w-full py-20 px-4 md:px-8 lg:px-16">
        <div className="text-center">
            <div className="flex justify-center mb-8">
                <Image src={user.avatar_url} width={150} height={150} alt={`${user.login}'s Avatar Image`} className="rounded-full" />
            </div>
            <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
                {user.name}
            </h1>
            <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">@{user.login}</h6>
        </div>
    </div>
  )
}

export default UserPage