import propTypes from 'prop-types'

import LogoImg from '../../assets/logo.png'

import { ReactComponent as PrintIcon } from '../../assets/icons/print.svg'

import './Header.scss'

const Header = ({ onClick }) => {
  return (
    <header className='Header'>
      <div className='ui-container'>
        <div className='Header_content'>
          <span className='Header_logo'>
            <img src={LogoImg} alt='CV' />
            CV Builder App
          </span>

          <button className='ui-button isLink' onClick={onClick}>
            <PrintIcon style={{ marginRight: '0.6rem' }} />
            Print
          </button>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  onClick: propTypes.func,
}

Header.defaultProps = {
  onClick: () => {},
}

export default Header
