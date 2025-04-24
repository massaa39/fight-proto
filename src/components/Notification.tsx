import React from 'react';

// type によって色を変える小さな汎用コンポーネント
export default function Notification({
  message,
  type,
}: {
  message: string;
  type: 'error' | 'info';
}) {
  const color = type === 'error' ? 'text-red-600' : 'text-blue-600';
  return <div className={`${color} mb-4`}>{message}</div>;
}
