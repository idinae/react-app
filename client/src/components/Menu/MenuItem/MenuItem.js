import style from './MenuItem.module.css';

const MenuItem = (props) => {
    return (
        <li className={style.listItem}><a href="#">{props.children}</a></li>
    )
}

export default MenuItem;