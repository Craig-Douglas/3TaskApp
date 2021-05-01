import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
  return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'white' : '#e33034'} text={showAdd ? 'Close' : 'Add'} npnonClick={onAdd}  />
        </header>
    )
}

Header.defaultProps = {
    title: '3 Tasks App',
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }
  

export default Header
   