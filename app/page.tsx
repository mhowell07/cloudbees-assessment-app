import UserTable from "@/components/UserTable";
import { GithubUser } from "./types/github";
import { Octokit } from 'octokit';

// Force dynamic rendering to avoid build-time fetch issues
export const dynamic = 'force-dynamic';

const Home = async () => {
  const octokit = new Octokit();

  let users: GithubUser[] = [];

  try {
    const response = await octokit.request('/users');
    users = response.data;
  } catch (error) {
    console.error('Error fetching Github users:', error);
    // Return empty array on error to prevent page crash
    users = [];
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="font-[family-name:var(--font-geist-sans)] w-full py-20">
        <main className="">
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <UserTable users={users} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home;
