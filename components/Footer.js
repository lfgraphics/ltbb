import 'tailwindcss/tailwind.css';

const Footer = () => {
  return (
    <footer className="bg-gray-200 w-full flex justify-center p-4 text-black">
      <div className="w-full flex flex-col md:flex-row">
        <div className="my-4 md:w-1/3 border-r border-r-gray-500 pl-6 pr-6 xs-border-none">
          <div className="my-4 md:w-1/3">
            <img src="The_Legal Base-logos_black.png" alt="The Legal Base Logo" className="w-full m-auto block sm:mx-auto sm:w-80" />
          </div>
          <h3 className="text-lg font-bold">Contact Us</h3>

          <h6 className="mt-3 font-bold">United States</h6>
          <ul>
            <li>
              <p className="text-xs">111 Lawrence Street, 49 B, New York, NY 11201, USA</p>
            </li>
            <li className="text-xs">
              <a href="mailto:contact@thelegalbase.com" className="hover:text-blue-700">
                contact@thelegalbase.com
              </a> <a href="tel:+14159094205" className="hover:text-blue-700">
                (+1) 415 909 4205
              </a>
            </li>
          </ul>
          <h6 className="mt-3 font-bold">United Kingdom</h6>
          <ul>
            <li>
              <p className="text-xs">Abbey House, 25 Clarendon Road, Redhill, Surrey RH1 1QZ, GBR</p>
            </li>
            <li className="text-xs">
              <a href="mailto:contact@thelegalbase.com" className="hover:text-blue-700">
                contact@thelegalbase.com
              </a> <a href="tel:+447894858483" className="hover:text-blue-700">
                (+44) 789 485 8483
              </a>
            </li>
          </ul>
          <h6 className="mt-3 font-bold">India</h6>
          <ul>
            <li>
              <p className="text-xs">The Legal Base,
                4th Floor - Bhavya Corporate Tower,
                Vibhuti Khand,
                Gomti Nagar,
                Lucknow - 226010,
                Uttar Pradesh,
                India</p>
            </li>
            <li className="text-xs">
              <a href="mailto:contact@thelegalbase.com" className="hover:text-blue-700">
                contact@thelegalbase.com
              </a> <a href="tel:+918287645230" className="hover:text-blue-700">
                (+91) 956 910 7903
              </a>
            </li>
          </ul>
        </div>

        <div className="my-4 md:w-1/3 border-r border-r-gray-500 pl-6 xs-border-none">
          <h3 className="text-lg font-bold">Important Links</h3>
          <ul className="mt-3">
            <li>
              <a href="/contact" className="hover:text-blue-700">Contact</a>
            </li>
            <li>
              <a href="/cookies-policy" className="hover:text-blue-700">Cookies Policy</a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-blue-700">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="my-4 md:w-1/3 pl-6">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-3">
            <li>
              <a href="/about" className="hover:text-blue-700">About Us</a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-700">Our Services</a>
            </li>
          </ul>
          <div className="mt-3 border-t border-t-gray-500 mr-6 xs-border-none">
            <h3 className="text-lg font-bold pb-2 pt-3">Socials</h3>
            <a href="https://twitter.com/thelegalbase" className="hover:text-blue-700 mr-3">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/company/thelegalbase/" className="hover:text-blue-700">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;