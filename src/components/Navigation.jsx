"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [shows, setShow] = useState(false)

  return (
    <nav className="flex justify-between items-center py-3 px-10 2xl:px-40 dark:bg-zinc-800 bg-zinc-100 h-16 relative">
      <div className="felx">
        <Link href={"/"} className="text-2xl relative font-[Montserrat] font-semibold">ZVINZV</Link>
      </div>
      <div className="flex gap-3 flex-col z-30">
        <h1 className="group/title dark:bg-zinc-600 bg-zinc-300 py-2 px-3 rounded cursor-pointer transition-all dark:hover:bg-zinc-700 hover:bg-zinc-400" onClick={() => setShow(prev => !prev)}>النواقل</h1>
        <div style={{"transform": shows ? "translateX(0rem)" : "translateX(20rem)"}} className="transition-all -translate-x-52 group/list z-20 w-52 min-h-full h-full dark:bg-zinc-800 bg-zinc-200 fixed right-0 top-0 grid place-content-center text-center gap-3">
          <Link href={"/"} className="dark:bg-zinc-500 bg-zinc-400 dark:hover:bg-zinc-600 hover:bg-zinc-500 hover:text-zinc-100 p-2 px-3 rounded-lg" onClick={() => setShow(prev => !prev)}>الصفحة الرئيسية</Link>
          <Link href={"/subjects"} className="dark:bg-zinc-500 bg-zinc-400 dark:hover:bg-zinc-600 hover:bg-zinc-500 hover:text-zinc-100 p-2 px-3 rounded-lg" onClick={() => setShow(prev => !prev)}>الـمـواد</Link>
          <Link href={"/contact"} className="dark:bg-zinc-500 bg-zinc-400 dark:hover:bg-zinc-600 hover:bg-zinc-500 hover:text-zinc-100 p-2 px-3 rounded-lg" onClick={() => setShow(prev => !prev)}>التواصل</Link>
        </div>
        <div style={{"opacity": shows ? "0.6" : "0", "pointerEvents": shows ? "all" : "none"}} className="min-w-full min-h-screen h-full fixed transition top-0 left-0 z-[1] bg-black opacity-50" onClick={() => setShow(prev => !prev)}>

        </div>
      </div>
    </nav>
  )
}
