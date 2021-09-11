export async function getUserDataClient() {
    // Call an internal API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:3000/api/userData');
    const data = await res.json();

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        data,
    };
}
