'use client';
import {clickHandler} from '../libs/action';

export default function Button() {
  return (
    <>
      <form action={clickHandler}>
        <button type="submit">무력화</button>
      </form>
    </>
  );
}

//서버 액션은 db 처리를 할 수 있다.
