const NavBar = () => {
    return (
    <>
        <nav className="w-full py-4 mb-4 px-6 flex rounded-md justify-between items-center bg-slate-800 text-white">
        <span className="font-bold text-lg">ImageWriter</span>
        <a href="https://www.linkedin.com/in/shubhamverma85/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white">LinkedIn</a>
        </nav>
    </>
    );
};

export default NavBar;