import { NavHashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ['home', 'projects', 'certifications', 'products'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="fixed top-0 w-full flex justify-center z-50 bg-white">
      <div className="w-[50%] max-w-6xl flex items-center justify-center font-sans font-semibold px-4 py-4 md:shadow-md">
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10">
          <NavHashLink
            smooth
            to="/#home"
            className={`cursor-pointer px-4 py-1 rounded transition ${
              activeSection === 'home'
                ? 'bg-[#2D2D2D] text-white'
                : 'hover:bg-[#2D2D2D] hover:text-white'
            }`}
          >
            Home
          </NavHashLink>

          <NavHashLink
            smooth
            to="/#projects"
            className={`cursor-pointer px-4 py-1 rounded transition ${
              activeSection === 'projects'
                ? 'bg-[#2D2D2D] text-white'
                : 'hover:bg-[#2D2D2D] hover:text-white'
            }`}
          >
            Projects
          </NavHashLink>

          <NavHashLink
            smooth
            to="/#certifications"
            className={`cursor-pointer px-4 py-1 rounded transition ${
              activeSection === 'certifications'
                ? 'bg-[#2D2D2D] text-white'
                : 'hover:bg-[#2D2D2D] hover:text-white'
            }`}
          >
            Certifications
          </NavHashLink>

          <NavHashLink
            smooth
            to="/#products"
            className={`cursor-pointer px-4 py-1 rounded transition ${
              activeSection === 'products'
                ? 'bg-[#2D2D2D] text-white'
                : 'hover:bg-[#2D2D2D] hover:text-white'
            }`}
          >
            Products
          </NavHashLink>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden ml-auto absolute right-6 top-4 z-50 ">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[32px] w-full bg-white shadow-md md:hidden flex flex-col items-center gap-4 py-4 z-40">
          <NavHashLink
            smooth
            to="/#home"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`cursor-pointer px-4 py-2 rounded transition ${
              activeSection === 'home'
                ? 'bg-[#2D2D2D] text-white'
                : 'hover:bg-[#2D2D2D] hover:text-white'
            }`}
          >
            Home
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`cursor-pointer px-4 py-2 rounded transition ${
              activeSection === 'projects'
                ? 'bg-[#2D2D2D] text-white'
                : 'hover:bg-[#2D2D2D] hover:text-white'
            }`}
          >
            Projects
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#certifications"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`cursor-pointer px-4 py-2 rounded transition ${
              activeSection === 'certifications'
                ? 'bg-[#2D2D2D] text-white'
                : 'hover:bg-[#2D2D2D] hover:text-white'
            }`}
          >
            Certifications
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#products"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`cursor-pointer px-4 py-2 rounded transition ${
              activeSection === 'products'
                ? 'bg-[#2D2D2D] text-white'
                : 'hover:bg-[#2D2D2D] hover:text-white'
            }`}
          >
            Products
          </NavHashLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
