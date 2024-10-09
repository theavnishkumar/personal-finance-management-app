import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 justify-center">
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <span className="hover:text-gray-900" href="#">
          <Link to={"/"}>Home</Link>
        </span>
        <span className="hover:text-gray-900" href="#">
          About
        </span>
        <span className="hover:text-gray-900" href="#">
          Contact
        </span>
      </nav>

      <div className="flex justify-center space-x-5">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
      </div>
      <p className="text-center text-gray-700 font-medium">
        &copy; 2024 Company Ltd. All rights reservered.
      </p>
    </footer>
  );
};

export default Footer;
