import Link from 'next/link';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await (await fetch('http://localhost:4000/posts')).json();
  return (
    <html lang="en">
      <body>
        <div>
          <Link href="/a" style={{marginRight: '10px'}}>
            A
          </Link>
          <Link href="/b">B</Link>
        </div>
        <h1>Root Layout</h1>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
        {children}
      </body>
    </html>
  );
}

//router cache는 새로고침할때마다 초기화 된다.
//한 번 접근하면 router cache에 저장이 된다. 그래서 페이지를 이동해도 새로고침을 하지 않는 이상 router cache에 저장된 페이지를 보여준다.

// root layout 과 a페이지에서 두번 요청하는거 같지만 실제로는 한번만 요청한다. 왜냐 request memoization이 되기 때문
// b페이지에서도 요청을 하면 data cache를 확인하고 리턴받아서 캐시된 데이터를 사용한다.
// request memoization은 렌더링이 끝나면 캐시를 지운다.
