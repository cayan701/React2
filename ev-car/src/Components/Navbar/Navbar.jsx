import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav' >
            <div className="nav-logo">Rivion</div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Our Products</li>
                <li>Work with us</li>
                <li className='nav-contact'>Contact Us</li>
            </ul>
        </div>
    )
}

export default Navbar;