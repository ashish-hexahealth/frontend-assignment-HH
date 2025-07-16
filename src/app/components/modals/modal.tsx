// components/Modal.tsx
import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  heading?: string;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, heading, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-sky-100 border border-sky-300 rounded-md p-6 w-full max-w-md relative ">
        {heading && <h2 className="text-lg font-semibold mb-4">{heading}</h2>}

        {children}

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 text-xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
