import Button from './components/Button';

export default async function Home() {
  //next에서 사용하는 fetch는 js의 fetch와 다르다. 더 많은 기능을 제공한다.
  // 캐시 무력화 기법 cache: 'no-store' 무조건 최신 데이터를 받아 온다.
  const posts = await (
    await fetch('http://localhost:4000/posts', {
      next: {tags: ['posts']},
    })
  ).json();
  return (
    <>
      <h1 className="text-2xl">home page</h1>
      <h2 className="text-2xl">{new Date().toLocaleTimeString()}</h2>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <Button></Button>
    </>
  );
}

// 캐시의 종류가 4가지가 있는데
// request memoization, Data cache, Full route cache(rsc, HTML), Router cache(rsc payload - react server component payload)
// router 캐시가 없으면 full route cache로 넘어가면 값이 저장
// 새로고침이 하는 순간 초기화 됨
// 정적 페이지는 5분동안 캐시가 유지됨
// 동적 페이지는 30초동안 캐시가 유지됨 하지만 버그가 있어서 변동이 될 수 있다.
// 사용자가 페이지가 요청했을때 최소 30초동안 캐시가 유지됨 길게는 5분까지 유지됨

// rsc payload는 1차 렌더링과정에서 발생하는 정보들 저장해놓았다가 재사용할 수 있다.
// full router cache는 보관기간이 다르는데 npm run build를 하면
// hit은 도달했다, miss는 지나쳤다. set은 설정됐다.

// 처음 렌더링시 root의 캐시를 저장해 놓고 다른페이지로가도 안 바뀐다. about의 캐시는 바뀐상태로 저장이 된다.
// 여기서 최소 30초동안 길게 5분이라는 시간동안 캐시가 유지된다. 그 조건 여러가지가 있다.

// request memoization은 하나에 렌더링 과정에 동일한 요청을 캐싱하는 것( 메모이제이션 )하는 것
//처음에 api call이 없으면 api의 끝점에서 데이터를 받아서 돌아오는 과정에서 데이터를 캐시하고 request

//데이터 캐시 무력화 기법
// 1. cache: 'no-store' - 무조건 최신 데이터 받아옴, 캐싱이 있는 api를 next팀이 데이터 캐시를 하지 않는다.
// 2.next: {revalidate: 시간} - 시간이 지나면 캐시를 초기화함, 주의사항으로 지정된 시간 보다 많이 지났을때 api call이 들어가는데 stale 상태에 마주한다.
// stale 상태는 api call이 더 이상 유효하지 않다고 체크해주는 상태

// 서버 액션 캐시 무력화 방법
// revalidatePath - 우선순위가 높음 경로 자체를 무력화하는 것이라
// revalidateTags
