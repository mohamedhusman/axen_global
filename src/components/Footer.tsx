import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-3">AxenGlobal.lk</h3>
          <p className="text-gray-300">
            Where Finance Meets Technology. Empowering SMEs with smart
            accounting, innovative software, and trusted advisory.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Contact</h4>
          <p className="text-gray-300">Email: info@axenglobal.lk</p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="hover:text-yellow-400">
              <FaLinkedin size={20} />
            </Link>
            <a href="#" className="hover:text-yellow-400">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} AxenGlobal.lk — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
