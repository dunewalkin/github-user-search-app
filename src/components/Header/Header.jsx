import '../../components/Header/header.scss';
import Toggle from '../Toggle/Toggle';


const Header = ({ onToggleTheme }) => {
  return (
    <header className='header-wrapper'>
        <h1>devfinder</h1>
        <Toggle onToggle={onToggleTheme} />
    </header>
  )
}

export default Header