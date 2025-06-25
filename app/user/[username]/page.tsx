import { GithubUserDetail } from "@/types/github";
import Image from "next/image";

import { IoBusinessOutline, IoLocationOutline, IoCalendarOutline   } from "react-icons/io5";
import { GoCodeSquare, GoDatabase } from "react-icons/go";
import { RiUserFollowLine } from "react-icons/ri";
import { FaPersonWalkingArrowRight, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import BackButton from "@/components/BackButton";


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

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };


  return (
    <div className="flex flex-col w-full items-center mb-20">
      <div id="back-btn" className="absolute top-2 left-2">
        <BackButton />
      </div>
      <div className="w-full pt-20 pb-40 px-4 md:px-8 lg:px-16 bg-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-8">
              <Image src={user.avatar_url} width={150} height={150} alt={`${user.login}'s Avatar Image`} className="rounded-full" />
            </div>
            <h1 id="name" className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-4 text-center">
              {user.name}
            </h1>
            <div id="social" className="flex w-full gap-x-8 gap-y-2 mb-10 flex-col md:flex-row items-center justify-center">
              <div className="flex items-center justify-center gap-1.5 flex-col md:flex-row">
                <FaGithub size={30} />
                <h6 className="font-medium text-gray-600 text-lg md:text-xl uppercase">@{user.login}</h6>
              </div>
              {user.twitter_username && (
              <div className="flex items-center justify-center gap-1.5 flex-col md:flex-row">
                <FaXTwitter size={30} />
                <h6 className="font-medium text-gray-600 text-lg md:text-xl uppercase">@{user.twitter_username}</h6>
              </div>
              )}
            </div>
            <div id="details" className="flex items-center justify-center gap-4 flex-col lg:flex-row">
              <div className="flex items-center justify-center gap-1 text-pretty flex-col md:flex-row text-center">
                <IoBusinessOutline size={20} className="text-gray-900" />
                {user.company ? user.company : 'N/A'}
              </div>
              <div className="flex items-center justify-center gap-1 text-pretty flex-col md:flex-row">
                <IoLocationOutline size={20} className="text-gray-900" />
                {user.location ? user.location : 'N/A'}
              </div>
              <div className="flex items-center justify-center gap-1 text-pretty flex-col md:flex-row">
                <IoCalendarOutline size={20} className="text-gray-900" />
                Joined {formatDate(user.created_at)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl flex gap-4 -mt-25 items-center flex-col md:flex-row px-4">
        <div className="flex flex-1 w-full">
          <div className="bg-white px-8 py-10 rounded-md flex flex-col items-center flex-1 border border-gray-300 shadow-lg">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <GoDatabase size={24} />
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">Repositories</h4>

            <p className="font-normal text-gray-500 text-md">
              {formatNumber(user.public_repos)}
            </p>
          </div>
        </div>
        <div className="flex flex-1 w-full">
          <div className="bg-white px-8 py-10 rounded-md flex flex-col items-center flex-1 border border-gray-300 shadow-lg">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <GoCodeSquare  size={24} />
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">Gists</h4>

            <p className="font-normal text-gray-500 text-md">
              {formatNumber(user.public_gists)}
            </p>
          </div>
        </div>
        <div className="flex flex-1 w-full">
          <div className="bg-white px-8 py-10 rounded-md flex flex-col items-center flex-1 border border-gray-300 shadow-lg">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <RiUserFollowLine size={24} />
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">Followers</h4>

            <p className="font-normal text-gray-500 text-md">
              {formatNumber(user.followers)}
            </p>
          </div>
        </div>
        <div className="flex flex-1 w-full">
          <div className="bg-white px-8 py-10 rounded-md flex flex-col items-center flex-1 border border-gray-300 shadow-lg">
            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <FaPersonWalkingArrowRight size={24} />
            </div>

            <h4 className="font-medium text-gray-700 text-lg mb-4">Following</h4>

            <p className="font-normal text-gray-500 text-md">
              {formatNumber(user.following)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage
