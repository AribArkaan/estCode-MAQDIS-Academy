import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo_new_ardes-removebg-preview.png'; 
const Header = () => {
  return (
    <header className="header">
      <div className="container">
       <div className="flex items-center">
          <img 
            src={logo} 
            alt="logo web" 
            className="logo"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = 'path/to/placeholder.png'
            }}
          />
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;