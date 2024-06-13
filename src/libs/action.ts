'use server';

import {revalidatePath, revalidateTag} from 'next/cache';

export async function clickHandler() {
  //특정 경로에대한 캐시 무력화
  // revalidatePath('/a');
  //   revalidatePath('/about');
  revalidateTag('posts');
}

//revalidatePath는 특정 경로에 대한 캐시를 무력화하는 함수이다. 즉 url 직접 지정해야 초기화 된다. 그래서 url이 많으면 피곤해짐
//revalidateTag는 특정 태그에 대한 캐시를 무력화하는 함수이다. 태그를 지정하면 해당 태그를 가진 페이지들이 초기화된다.
