import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    id: 1,
    name: 'GitHub',
    icon: <FaGithub size={20} />,
    href: 'https://github.com/Rushika08',
    style: 'bg-gray-800',
  },
  {
    id: 2,
    name: 'LinkedIn',
    icon: <FaLinkedin size={20} />,
    href: 'https://www.linkedin.com/in/rushika-david-jayasinghe-95170b1a3/',
    style: 'bg-blue-700',
  },
  {
    id: 3,
    name: 'Medium',
    icon: <FaMedium size={20} />,
    href: 'https://medium.com/@rushikajayasinghe',
    style: 'bg-black',
  },
  {
    id: 4,
    name: 'Email',
    icon: <FaEnvelope size={20} />,
    href: 'mailto:rushikajayasinghe@gmail.com',
    style: 'bg-red-600',
  },
];

const SocialLinks = ({ isMobile = false }) => {
  if (isMobile) {
    return (
      <div className="lg:hidden flex justify-center py-4 gap-6">
        {socialLinks.map(({ id, href, icon, name }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-green-400"
            aria-label={name}
          >
            {icon}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="hidden lg:flex flex-col fixed top-[35%] left-0 z-50">
      <ul>
        {socialLinks.map(({ id, name, icon, href, style }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-12 ml-[-100px] hover:ml-0 duration-300 px-4 ${style} text-white rounded-r-lg`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              target="_blank"
              rel="noreferrer"
            >
              {name} {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
