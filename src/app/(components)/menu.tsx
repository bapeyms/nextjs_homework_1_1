import Link from "next/link";

export default function Menu() {
    return (
        <div className="flex w-full justify-end px-10 py-4 bg-pink-100">
            <nav className="flex items-center gap-10">
                <Link href="/projects">Projects</Link>
                <Link href="/details">Details</Link>
                <Link href="/contacts">Contacts</Link>
                <Link href="/about">About Us</Link>
            </nav>
        </div>
    )
}