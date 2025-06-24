import UserTable from "@/components/UserTable";
import { GithubUser } from "./types/github";

const Home = async () => {

  // Get the data from the Users route handler
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {})

  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  const users: GithubUser[] = await response.json();

  return (
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
  );
}

export default Home;
