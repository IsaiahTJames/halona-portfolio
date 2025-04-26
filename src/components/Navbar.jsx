export default function Navbar() {
    return (
        <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
            <h1 className="text-xl font-bold text-red-500">Halona Portfolio</h1>
            <ul className="flex gap-4 text-gray-600 font-medium">
                <li><a href="#certs" className="hover:text-blue-600">Certifications</a></li>
                <li><a href="#services" className="hover:text-blue-600">Services</a></li>
                <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
        </nav>
    );
}