import { Link } from 'react-router-dom';
import navbarlogo from '../components/images/navbarlogo.png'
import './style.css'

const Navbar=()=> {
  return (
    <nav className="navbar">
    <div className="logo">
      <Link to="/" >
      <img className='logoNav' src={navbarlogo}/>
      </Link>
      </div>
      <div className='faqsNav'>
      <Link to='/about' className="FaqsButton">
        About Compass
      </Link>
      <Link to="/faqs" className="FaqsButton">
        FAQs
      </Link>
      </div>
    </nav>
  );
}

export default Navbar;
