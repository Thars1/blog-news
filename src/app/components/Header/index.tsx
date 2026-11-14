import Link from "next/dist/client/link";

const Header = () => {
    return (
    <header className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6">
        <Link href="/">
            <h1 className="text-4xl">Blog News</h1>
        </Link>
        </div>
            
    </header>);
}

export default Header