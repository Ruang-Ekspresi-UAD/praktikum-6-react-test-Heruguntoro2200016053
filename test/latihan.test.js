import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import React from 'react';

// Test untuk memastikan komponen Counter bekerja dengan baik
test('Counter Default Value must be 0', () => {
  render(<Counter />);
  expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
});

test('Increment works when button clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('Increment');
  fireEvent.click(incrementButton);
  expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
});

test('Decrement works when button clicked', () => {
  render(<Counter />);
  const decrementButton = screen.getByText('Decrement');
  fireEvent.click(decrementButton);
  expect(screen.getByText(/Counter: -1/i)).toBeInTheDocument();
});

test('Reset the count using reset button', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('Increment');
  const resetButton = screen.getByText('Reset');
  fireEvent.click(incrementButton);
  fireEvent.click(resetButton);
  expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
});

// Test untuk komponen Greeting
test('Greeting component with my name', () => {
  render(<Greeting name="Ronal" />);
  expect(screen.getByText(/Hello, Ronal!/i)).toBeInTheDocument();
});

test('Greeting component with lecturer name', () => {
  render(<Greeting name="Pak Heru" />);
  expect(screen.getByText(/Hello, Pak Heru!/i)).toBeInTheDocument();
});

// Test untuk komponen AlertButton
test('Triggers alert with correct message when clicked', () => {
  window.alert = jest.fn(); // mock alert
  render(<AlertButton message="Hello from Alert!" />);
  const alertButton = screen.getByText('Show Alert');
  fireEvent.click(alertButton);
  expect(window.alert).toHaveBeenCalledWith('Hello from Alert!');
});