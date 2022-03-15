import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="grid place-items-center h-screen text-gray-100">
      <div className="text-center">
        <h1 className="font-extrabold text-7xl md:text-9xl">Oops!</h1>
        <p className="font-medium text-3xl md:text-5xl my-8">
          404 - Page not found!
        </p>
        <Link
          to="/"
          class="inline-block bg-violet-700 text-black-700 font-semibold py-2 px-4 rounded-md transition linear duration-300 hover:-translate-y-1 hover:scale-110"
        >
          BACK TO HOME
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
