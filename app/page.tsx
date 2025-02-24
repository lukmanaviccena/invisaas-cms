import Link from "next/link"

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text px-0.5 py-3.5 font-display text-4xl text-transparent duration-1000 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        invitationsaas
      </h1>
      <div className="h-px w-screen animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="mx-6 mt-16 animate-fade-in text-center">
        <h2 className="mb-4 text-sm text-zinc-500">
          We're currently working 👨‍💻 hard to bring you something great, and we can't wait to share
          it with you 📅
        </h2>
        <Link
          href="https://github.com/lukmanaviccena/invisaas-cms"
          target="_blank"
          className="text-xs text-zinc-400 underline duration-500 hover:text-zinc-300"
        >
          Get Template
        </Link>
      </div>
    </div>
  )
}
