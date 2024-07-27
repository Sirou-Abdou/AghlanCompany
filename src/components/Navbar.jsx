import React from 'react'

const Navbar = () => {
  return (
    <nav className="h-[70px]">
        <div className="flex justify-between items-center px-3 py-3 sm:mx-5 md:mx-10"> 
            <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink from-10% to-secondary to-40%" />
                <h1 className="flex font-semibold text-xl lg:text-3xl uppercase">tflorentina</h1>
            </div>
            <div>
                <ul className="hidden lg:flex gap-8">
                    <li className="font-medium">Overview</li>
                    <li className="font-medium">Feature</li>
                    <li className="font-medium">About</li>
                    <li className="font-medium">Pricing</li>
                </ul>
            </div>
            <div className="hidden sm:flex justify-between items-center gap-6">
                <h2>Language</h2>
                <button className="bg-secondary py-2 px-4 rounded-md font-semibold">Sign up</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar