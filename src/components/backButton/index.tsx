'use client';

import { redirect, useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

    const handleBack = () => {
    if (window.history.length > 2) {
   router.back();
    } else {
   redirect('/home');
    }
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center justify-center mb-8 w-10 h-10 border border-blue-600 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}
