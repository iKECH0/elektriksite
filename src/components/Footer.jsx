const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
          <div className="mb-8 flex items-center">
            <img src="/logo2.png" alt="Alpha Innovation" className="h-32 lg:h-36 w-auto object-contain brightness-0 invert opacity-90" />
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 lg:w-10 lg:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><i className="fa-brands fa-linkedin-in text-lg lg:text-base"></i></a>
            <a href="#" className="w-12 h-12 lg:w-10 lg:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><i className="fa-brands fa-twitter text-lg lg:text-base"></i></a>
            <a href="#" className="w-12 h-12 lg:w-10 lg:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><i className="fa-brands fa-instagram text-lg lg:text-base"></i></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Our Products</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Investor Relations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-location-dot mt-1 text-primary"></i>
              <span>123 Innovation Drive, Tech Park<br/>New York, NY 10001</span>
            </li>

            <li className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-primary"></i>
              <a href="mailto:info@alphainnovation.net" className="hover:text-white transition-colors">info@alphainnovation.net</a>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Alpha Innovation. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
