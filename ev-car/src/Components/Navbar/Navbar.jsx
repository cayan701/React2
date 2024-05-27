import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav' >
            <h2 className="nav-logo">Rivion</h2>
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