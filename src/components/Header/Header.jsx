import '../../components/Header/header.scss';
import Toggle from '../Toggle/Toggle';


const Header = ({ onToggleTheme }) => {
  return (
    <div className='header-wrapper'>
        <h1>devfinder</h1>
        <Toggle onToggle={onToggleTheme} />
    </div>
  )
}

export default Header