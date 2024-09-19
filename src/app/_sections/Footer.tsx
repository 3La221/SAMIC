import Image from 'next/image';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-10">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        {/* Company Logo */}
        {/* <div className="mb-6 md:mb-0">
          <Image
            src="https://www.samic.dz/images/logo_full.png"
            alt="Company Logo"
            width={200}
            height={50}
          />
        </div> */}

        {/* Social Media Icons */}
        {/* <div className="flex space-x-6">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="hover:text-gray-400" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} className="hover:text-gray-400" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="hover:text-gray-400" />
          </a>
        </div> */}
      </div>

      {/* Footer bottom text */}
      <div className="mt-8 text-center text-sm">
        © {new Date().getFullYear()} SAMIC DZ. All rights reserved.
      </div>
    </footer>
  );
}
