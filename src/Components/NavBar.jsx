import React from 'react'

function NavBar() {
  return (
    <>
      <div className="w-full h-fit py-3 bg-greyish text-darkRose">
        <h1
          className="text-center text-3xl tracking-wider sm:text-7xl font-black my-auto font-head"
          style={{ textShadow: "2px 2px 4px rgba(205, 50, 0, 0.5)" }}
        >
          TODO APP
        </h1>
      </div>
    </>
  );
}

export default NavBar
