import React, { useState } from 'react'; // Impor React dan useState

// Definisikan komponen Counter
const Counter = () => {
  const [count, setCount] = useState(0); // state untuk menghitung

  return (
    <div>
      <h1>Counter: {count}</h1> {/* Menampilkan nilai counter */}
      <button onClick={() => setCount(count + 1)}>Increment</button> {/* Tombol untuk menambah counter */}
      <button onClick={() => setCount(count - 1)}>Decrement</button> {/* Tombol untuk mengurangi counter */}
    </div>
  );
};

// Ekspor default komponen Counter
export default Counter;