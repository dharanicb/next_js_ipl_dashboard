const { default: Link } = require("next/link");

const NavBar = () => (
    <nav className="bg-neutral-700 text-[white] w-[100%] h-[50px] flex justify-center">
        <Link href="/" className="m-[10px]">Home</Link>
        <Link href="/contect" className="m-[10px]">Contect</Link>
    </nav>
)
export default NavBar