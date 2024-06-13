export default async function About() {
  const posts = await (await fetch('http://localhost:4000/posts')).json();
  return (
    <>
      <h1>About Component</h1>
      <h2 className="text-2xl">{new Date().toLocaleTimeString()}</h2>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
