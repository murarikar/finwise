import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',      // Keeps navbar at top
      top: 0,                 // Aligns it to the very top
      left: 0,
      width: '90%',          // Full width
      backgroundColor: '#282c34',
      color: 'white',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000            // Makes sure it sits above all content
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        FinWise
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/learn" style={{ color: 'white', textDecoration: 'none' }}>Learn</Link>
        <Link to="/tools" style={{ color: 'white', textDecoration: 'none' }}>Tools</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        <Link to="/chat" style={{ color: 'white', textDecoration: 'none' }}>Chat</Link>
       

      </div>
    </nav>
  );
};

export default Navbar;
