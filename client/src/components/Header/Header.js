import style from './Header.module.css';
import NavItem from './NavItem';

const Header = () => {
    return (
        <div>
            
            <nav className={style.navigation}>
                <ul>
                        <li className={style.listItem}><img src="./../white-origami-bird.png"></img></li>
                        <NavItem>Going to 1</NavItem>
                        <NavItem>Going to 2</NavItem>
                        <NavItem>Going to 3</NavItem>
                        <NavItem>Going to 4</NavItem>
                        <NavItem>Going to 5</NavItem>
                        <NavItem>Going to 6</NavItem>
                        <NavItem>Going to 7</NavItem>
                        <NavItem>Going to 8</NavItem>
                        <NavItem>Going to 9</NavItem>
                        <NavItem>Going to 10</NavItem>
                        <NavItem>Going to 11</NavItem>     
                </ul>
            </nav>
        </div>
    );
}

export default Header;