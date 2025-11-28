import { Menu, X, Phone, MapPin, Mail, Shield, Zap, Battery, Camera, Sun, Wifi, Phone as PhoneIcon } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: Zap,
      title: 'UPS Systems',
      description: 'Uninterrupted power supply solutions for homes and businesses, ensuring your operations never stop.'
    },
    {
      icon: Battery,
      title: 'Inverters & Batteries',
      description: 'High-performance inverters and reliable batteries for continuous power backup and energy storage.'
    },
    {
      icon: PhoneIcon,
      title: 'D2H Services',
      description: 'Authorized distributor of direct-to-home satellite television services with premium channel packages.'
    },
    {
      icon: Camera,
      title: 'CCTV Solutions',
      description: 'Advanced surveillance systems for comprehensive security monitoring of your premises.'
    },
    {
      icon: Sun,
      title: 'Solar Projects',
      description: 'Sustainable solar energy solutions for residential and commercial properties, reducing your carbon footprint.'
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Lightning-fast fiber optic internet connectivity for seamless streaming and business operations.'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img
                src="https://i.postimg.cc/3wQ4cVbr/image3598-8.png"
                alt="Genuine Power Systems"
                className="h-14 w-auto"
              />
              <div className="ml-3 hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">Genuine Power Systems</h1>
                <p className="text-xs text-gray-600">Powering Your Future</p>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 font-medium transition">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 font-medium transition">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 font-medium transition">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Services</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">About</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Contact</button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        <section id="home" className="relative bg-gradient-to-br from-blue-50 to-gray-100 py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Empowering Your World with <span className="text-blue-600">Reliable Solutions</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                  Your trusted partner in power backup systems, renewable energy, connectivity, and security solutions. Serving Madurai with excellence and dedication.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Get Started
                  </button>
                  <a
                    href="https://wa.me/919952118362"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Power backup systems"
                    className="rounded-xl shadow-lg w-full h-48 object-cover"
                  />
                  <img
                    src="https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Solar energy solutions"
                    className="rounded-xl shadow-lg w-full h-48 object-cover"
                  />
                  <img
                    src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="CCTV security systems"
                    className="rounded-xl shadow-lg w-full h-48 object-cover"
                  />
                  <img
                    src="https://images.pexels.com/photos/159291/beer-machine-transport-technology-159291.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="UPS and battery solutions"
                    className="rounded-xl shadow-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions for all your power, connectivity, and security needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 border border-gray-100"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Genuine Power Systems</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We are a dedicated team of professionals committed to providing top-tier power solutions, connectivity services, and security systems to homes and businesses throughout Madurai.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  With years of experience in the industry, we specialize in the sales and service of UPS systems, inverters, batteries, CCTV installations, solar projects, and high-speed internet connectivity. As an authorized D2H distributor, we also bring entertainment to your doorstep.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our commitment to quality, reliability, and customer satisfaction sets us apart. We believe in building lasting relationships with our clients through exceptional service and genuine care.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-700">Happy Clients</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
                  <div className="text-gray-700">Services Offered</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-700">Support Available</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-700">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600">We're here to help with all your power and connectivity needs</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone / WhatsApp</h3>
                    <a href="tel:+919952118362" className="text-gray-700 hover:text-blue-600 transition">
                      +91 99521 18362
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700 leading-relaxed">
                      3/65, Nataraj Complex, 1st Floor,<br />
                      Melur Main Road, Uthangudi,<br />
                      Madurai - 625 107
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Saturday:</span>
                      <span className="font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">10:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                  Whether you need a power backup solution, solar installation, security system, or internet connectivity, we're ready to help you find the perfect solution.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919952118362"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white text-blue-600 text-center px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
                  >
                    Chat on WhatsApp
                  </a>
                  <a
                    href="tel:+919952118362"
                    className="block w-full bg-blue-800 text-white text-center px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition"
                  >
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="https://i.postimg.cc/3wQ4cVbr/image3598-8.png"
                alt="Genuine Power Systems"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">
                Your trusted partner for power solutions, connectivity, and security systems in Madurai.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition">Home</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition">Services</button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition">About</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition">Contact</button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>+91 99521 18362</p>
                <p>Melur Main Road, Uthangudi</p>
                <p>Madurai - 625 107</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Genuine Power Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
