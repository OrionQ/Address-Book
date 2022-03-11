import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <div className="block text-primary text-5xl m-6 mt-4 ">
        <div className="m-6">Page Not Found!</div>
        <div>
          <Link to="/">
            <button className="bg-button text-primary w-fit rounded-xl px-2 py-3 mt-2 text-xl hover:bg-hover duration-200 mr-4">
              Go Back to the Home page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
