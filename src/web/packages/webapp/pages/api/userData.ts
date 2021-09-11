import type { NextApiRequest, NextApiResponse } from 'next';

//When calling api route, case matters for file name
export const getUserData = async () => {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://reqres.in/api/users/2');
    const data = await res.json();

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        data,
    };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(await getUserData());
}
