import { GithubUserDetail } from "@/types/github";


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
    <></>
  )
}

export default UserPage