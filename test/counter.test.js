import React from 'react'; // Pastikan React diimpor terlebih dahulu
import { render, screen, fireEvent } from '@testing-library/react'; // Mengimpor fungsi render, screen, dan fireEvent
import { Counter } from './counter'; // Pastikan ini sesuai dengan lokasi komponen Counter
import '@testing-library/jest-dom'; // Mengimpor jest-dom untuk expect tambahan
import { Display } from './display'; // Jika memang diperlukan, pastikan Display ada

// Test untuk memastikan nilai awal Counter adalah 0
test('Counter Default Value must be 0', () => {
  render(<Counter />);
  // Menyaring teks yang berisi "Counter: 0"
  expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
});

// Test untuk memastikan tombol Increment berfungsi
test('Increment works when button clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('Increment'); // Menemukan tombol Increment
  fireEvent.click(incrementButton); // Mengklik tombol Increment
  expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument(); // Memeriksa apakah counter bertambah menjadi 1
});

// Test untuk memastikan tombol Decrement berfungsi
test('Decrement works when button clicked', () => {
  render(<Counter />);
  const decrementButton = screen.getByText('Decrement'); // Menemukan tombol Decrement
  fireEvent.click(decrementButton); // Mengklik tombol Decrement
  expect(screen.getByText(/Counter: -1/i)).toBeInTheDocument(); // Memeriksa apakah counter berkurang menjadi -1
});