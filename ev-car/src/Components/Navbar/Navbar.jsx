import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-logo'>Tesla</div>
            <ul className="nav-menu">
                <li>Vehicles</li>
                <li>Energy</li>
                <li>Charging</li>
                <li>Discover</li>
                <li className='nav-contact'>Shop</li>
            </ul>
        </div>
    );
}

export default Navbar;