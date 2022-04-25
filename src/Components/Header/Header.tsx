import CreationTaskBlock from './CreationTaskBlock/CreationTaskBlock';

import './Header.scss'
const logo = require('../../Assets/logo.png')

const Header = () => {

    return(
        <header className='primary-content__header'>
            <img className='header__logo' src={logo} alt="logoImg" />
            <CreationTaskBlock />
            <div className='header__login-buttons'></div>
        </header>
    )
}

export default Header;