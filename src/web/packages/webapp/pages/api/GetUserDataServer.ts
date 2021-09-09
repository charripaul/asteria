export async function getUserDataServer() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://reqres.in/api/users/2');
    const data = await res.json();

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        data,
    };
}
