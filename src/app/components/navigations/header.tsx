'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import LoginModal from '../modals/login-modal'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 h-[80px] bg-white flex items-center justify-between px-4 md:px-6 lg:px-10 xl:px-14 z-50">
        <div className="navbar-brand">
          <a href="">
            <Image
              className="w-[100px] md:w-auto h-auto"
              src={'https://cdn.hexahealth.com/static/images/HHlogo.png'}
              alt="Logo"
              width={200}
              height={90}
              fetchPriority="high"
            />
          </a>
        </div>
        <button
          onClick={openModal}
          className="rounded-full flex  cursor-pointer items-center justify-center px-5 py-2 bg-blue-400 text-white border border-blue-600 hover:bg-blue-500"
        >
          Login
        </button>
        <LoginModal isOpen={isOpen} onClose={closeModal} />
      </header>
      <div className="relative h-[80px]"></div>
    </>
  )
}
