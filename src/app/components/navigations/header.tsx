import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 h-[80px] bg-white flex items-center justify-between px-4 md:px-6 lg:px-10 xl:px-14">
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
      </header>
      <div className="relative h-[80px]"></div>
    </>
  )
}
