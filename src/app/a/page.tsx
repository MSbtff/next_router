import {clickHandler} from '@/libs/action';

export default async function Apage() {
  const posts = await (
    await fetch('http://localhost:4000/posts', {
      next: {tags: ['posts']},
      //no-cache는 원래 있던 기능으로 next에서는 no-store로 대체한다. 프레임워크의 강제성임
      // data-cache를 우회하는거임
    })
  ).json();
  return (
    <>
      <h1>Apage Component</h1>
      <h1>{new Date().toLocaleTimeString()}</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <form action={clickHandler}>
        <button type="submit">무력화</button>
      </form>
    </>
  );
}

//re
