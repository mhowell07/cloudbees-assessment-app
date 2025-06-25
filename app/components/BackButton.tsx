'use client';

import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import React from 'react';

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center justify-center gap-1 text-sm text-gray-900 hover:text-blue-700 hover:cursor-pointer"
    >
      <FaArrowLeft size={16} /> Back
    </button>
  );
};

export default BackButton;
