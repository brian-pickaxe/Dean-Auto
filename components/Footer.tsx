import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Dean Auto Detailers</h3>
            <p className="text-gray-400 mb-4">
              Professional mobile car detailing in Thornton, CO and the North
              Denver suburbs. Quality service brought right to your doorstep.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/interior" className="hover:text-white transition-colors duration-200">
                  Interior Detailing
                </Link>
              </li>
              <li>
                <Link href="/services/exterior" className="hover:text-white transition-colors duration-200">
                  Exterior Detailing
                </Link>
              </li>
              <li>
                <Link href="/services/ceramic-coating" className="hover:text-white transition-colors duration-200">
                  Ceramic Coating
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors duration-200">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Service Areas</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Thornton, CO
                </Link>
              </li>
              <li>
                <Link href="/westminster" className="hover:text-white transition-colors duration-200">
                  Westminster, CO
                </Link>
              </li>
              <li>
                <Link href="/brighton" className="hover:text-white transition-colors duration-200">
                  Brighton, CO
                </Link>
              </li>
              <li>
                <Link href="/north-denver" className="hover:text-white transition-colors duration-200">
                  North Denver
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <address className="not-italic space-y-2 text-gray-400">
              <p>
                <a
                  href="mailto:deanautodetailers95@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  deanautodetailers95@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+17205323072"
                  className="hover:text-white transition-colors duration-200"
                >
                  (720) 532-3072
                </a>
              </p>
              <p className="text-sm mt-4">
                Thornton, CO · North Denver metro
              </p>
              <p className="text-sm">
                Serving Thornton, Westminster, Brighton, and surrounding North Denver
                suburbs
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500 space-y-1">
          <p>&copy; {new Date().getFullYear()} Dean Auto. All rights reserved.</p>
          <p className="text-gray-400">
            Hosted and SEO by{" "}
            <a
              href="https://milehighinternet.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200 underline decoration-gray-500 hover:decoration-gray-400"
            >
              milehighinternet.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

