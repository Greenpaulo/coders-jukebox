import Link from 'next/Link';

const Navbar = () => (
  <nav id="navbar">
    <div id="logo">
      <Link href="/">
        <a>
          <h1>The Coder's JukeBox</h1>
        </a>
      </Link>
    </div>
    <ul id="nav-menu">
      <Link href="/about">
        <a className="nav-link">About</a>
        </Link>
    </ul>
  </nav>
)

export default Navbar;
