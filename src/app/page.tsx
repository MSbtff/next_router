export default async function Home() {
  const posts = await (await fetch('http://localhost:4000/posts')).json();
  return (
    <>
      <h1>Home Component</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
