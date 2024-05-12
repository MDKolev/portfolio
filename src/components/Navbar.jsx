import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About Me</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;