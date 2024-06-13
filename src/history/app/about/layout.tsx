export async function generatedMetadata() {
  // API Call
  const posts = await (await fetch('http://localhost:4000/posts')).json();
  return {
    title: posts[0].title,
  };
}

export default function layout({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}

//동일한 api 콜은 메모이제이션 되기에 한 번만 호출이 된다.
//부담 없이 주소만 같다면 원하는대로 호출해도 성능의 영향이 없다.
// 동일한 요청에 따른 두 번째 call을 request 보내지 않는다.
// 왜냐 이미 캐시가 되어있기 때문이다. 어디서? Request memoization에서
// home 컴포넌트와 about 컴포넌트를 클릭했을시 둘이 시간 차이가 없다.
// api get에서만 적용이되는 기능임
// server에서 변경된 데이터를 가져오지 않기에 캐시가 되어있는것이다. 새로고침해도 데이터가 변동되지 않는다.
// 데이터 캐시를 초기화해줘야한다. 안 그러면 변동되지 않은 데이터를 계속 보여준다.

// 서버 액션이 next의 캐싱시스템과 유사하다.
//  swr, react-query를 사용하면 캐싱이 된다. 그래서 섞어쓰면 캐시를 어디서 쓰고 읽는지 관리하는 것을 철저하게 해야한다.
// 그러니 되도록이면 안 쓰는걸 추천한다.
