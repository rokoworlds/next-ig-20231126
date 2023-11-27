import Link from "next/link"
import Search from "../Search/component"

export default function Navbar() {
    return (
        <header className="bg-neutral-950 sticky top-0 z-10">
            <nav 
            className="flex flex-col gap-4 items-center
            sm:flex-row sm:justify-between 
            p-4 font-bold max-w-6xl mx-auto text-white 
            ">
                <h1 className="text-lg sm:text-xl text-center whitespace-nowrap">
                    <Link href='/'> IG Next </Link>
                </h1>
                <Search />
            </nav>
        </header>
    )
}