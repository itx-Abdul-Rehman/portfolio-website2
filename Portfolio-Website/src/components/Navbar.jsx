import { NavHashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

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
      {
        threshold: 0.6,
      }
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
    <div className="fixed top-0 w-full flex justify-center z-50 ">
      <div className="w-[50%] max-w-6xl flex flex-wrap justify-center shadow-md md:justify-center font-sans font-semibold items-center gap-10 px-4 py-4">
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
    </div>
  );
};

export default Navbar;
