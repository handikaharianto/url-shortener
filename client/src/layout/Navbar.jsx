import { Link } from "react-router-dom";
import { CgLink } from "react-icons/cg";

function Navbar() {
  return (
    <nav className="absolute w-screen bg-violet-700 p-4">
      <div className="sm:container mx-auto">
        <h1 className="text-gray-100 text-3xl font-semibold">
          <Link to="/" className="flex items-center">
            <CgLink className="mr-1" />
            URL Shortener
          </Link>
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
