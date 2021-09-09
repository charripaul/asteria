export async function getUserData() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://reqres.in/api/users/1');
    const data = await res.json();
    console.log('client1');
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        data,
    };
}
