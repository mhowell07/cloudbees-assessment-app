import { NextRequest, NextResponse } from 'next/server';

import { Octokit } from 'octokit';

/*** 
 * Define the GET method response
 * Documentation Link: https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user
 ***/

export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {

  const { username } = await params;

  const octokit = new Octokit();

  try {
    const { data: user } = await octokit.request('/users/{username}', {
      username: username,
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching Github user:', error);

    return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 });
  }
}
