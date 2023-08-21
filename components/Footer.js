import React from 'react';

const Footer = ({ darkMode }) => {
  const bgColor = darkMode ? 'bg-gray-800' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-gray-800';

  return (
    <footer className={`py-12 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`col-span-1 md:col-span-2 ${textColor}`}>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">United States</h3>
              <p>111 Lawrence Street, 49 B, New York, NY 11201, USA</p>
              <p>contact@thelegalbase.com (+1) 718 865 3815</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">United Kingdom</h3>
              <p>Abbey House, 25 Clarendon Road, Redhill, Surrey RH1 1QZ, GBR</p>
              <p>contact@thelegalbase.com (+44) 789 485 8483</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">India</h3>
              <p>Office No 45 , 12th Floor, iThum Tower, Block B, Galaxy Business Park, Sector 62 , Noida – 201309 Uttar Pradesh, India</p>
              <p>contact@thelegalbase.com (+91) 828 764 5230</p>
            </div>
          </div>
          <div className={`col-span-1 md:col-span-1 ${textColor}`}>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Important Links</h3>
              <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Cookies Policy</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul>
                <li><a href="#">Medico Legal</a></li>
                <li><a href="#">Document Review</a></li>
                <li><a href="#">Estate Planning</a></li>
                <li><a href="#">Case Intakes</a></li>
                <li><a href="#">Deposition Summaries</a></li>
                <li><a href="#">Legal Research</a></li>
                <li><a href="#">Legal Transcription</a></li>
              </ul>
            </div>
            <div className={`mt-6 ${textColor}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <h3 className="text-lg font-semibold mb-3">Socials</h3>
                  <div>
                    <a href="https://twitter.com/TheLegalBase" target='_blank' className="text-gray-600 hover:text-blue-400 transition-all duration-300 mr-3">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/thelegalbase/" target='_blank' className="text-gray-600 hover:text-blue-400 transition-all duration-300">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;