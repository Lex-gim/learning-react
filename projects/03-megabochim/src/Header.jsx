import PropTypes from 'prop-types'

export const Header = ({isLoggedIn, username}) => {
    return (
        <header>
            <h1>{isLoggedIn ? `Welcome ${username}`:'Welcome'}</h1>
            <ul>
                <li><a href="#">One</a></li>
                <li><a href="#">Two</a></li>
                <li><a href="#">Three</a></li>
                <li><a href="#">Four</a></li>
            </ul>
        </header>
    )
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}