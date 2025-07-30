import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#56534E] px-20 py-2">
      <div className="flex items-center gap-1">
        <h1 className="text-white text-4xl font-playfair">OFC</h1>
        <div>
          <p className="text-white text-xs font-playfair ">OKOH FESTUS</p>
          <p className="text-white text-xs font-playfair">CHUKWUYEM</p>
        </div>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white text-sm font-playfair font-bold hover:border-b-2 border-b-[#1AA4DF]">
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white text-sm font-playfair font-bold hover:border-b-2 border-b-[#1AA4DF]"
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="/impact"
            className="text-white text-sm font-playfair font-bold hover:border-b-2 border-b-[#1AA4DF]"
          >
            IMPACT
          </Link>
        </li>
        <li>
          <Link
            to="/media"
            className="text-white text-sm font-playfair font-bold hover:border-b-2 border-b-[#1AA4DF]"
          >
            MEDIA
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-white text-sm font-playfair font-bold hover:border-b-2 border-b-[#1AA4DF]"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
