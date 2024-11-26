import PropTypes from 'prop-types'

export const Navbar = ({isLoggedIn, username}) => {
    return (
        <header className='header'>
            <span className='welcome-text'>{isLoggedIn ? `Welcome ${username}`:'Welcome'}</span>
            <nav className='navbar'>
                <a href="#">One</a>
                <a href="#">Two</a>
                <a href="#">Three</a>
                <a href="#">Four</a>
            </nav>
        </header>
    )
}

Navbar.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}