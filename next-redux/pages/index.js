import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>간단한 counter 만들기🤗</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <label style={{ padding: '2rem' }}>{count}</label>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
