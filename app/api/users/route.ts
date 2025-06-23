import { NextResponse } from 'next/server';

import { Octokit } from 'octokit';


/***
 *  HTTP methods are not cached by default. This allows us to cache the response of the API
 * // so we don't need to reach out again until we rebuild the application.
 ***/
export const dynamic = 'force-static'

/*** 
 * Define the GET method response
 * Documentation Link: https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#list-users
 ***/

export async function GET() {
  const octokit = new Octokit();

  try {
    const response = await octokit.request('/users');

    const users = await response;

    return NextResponse.json(users.data);
  } catch (error) {
    console.error('Error fetching Github users:', error);
    
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}