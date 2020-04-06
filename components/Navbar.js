import Link from 'next/Link';

const Navbar = () => (
  <nav id="navbar">
    <div id="logo">
      <Link href="/">
        <a>
          <h1>CodeTunes</h1>
        </a>
      </Link>
    </div>
    <ul id="nav-menu">
      <Link href="/about">
        <a className="nav-link">About</a>
        </Link>
    </ul>

    <style jsx>{`
    
      #navbar {
        display: flex;
        justify-content: space-between;
      }

      #logo h1 {
        color: white;
      }

      .nav-link {
        color: white;
      }



      



    `}</style>
  </nav>
)

export default Navbar;
