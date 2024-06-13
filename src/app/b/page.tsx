export default async function Bpage() {
  const posts = await (
    await fetch('http://localhost:4000/posts', {
      next: {tags: ['posts']},
    })
  ).json();
  return (
    <>
      <h1>B Component</h1>
      <h1>{new Date().toLocaleTimeString()}</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
