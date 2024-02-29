import {NavLink} from 'react-router-dom'
import {menu1,menu2} from "../../Data/Menus.jsx";

const NavBar = () => {
    const textDecoration = 'underline underline-offset-4'
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex gap-3 items-center'>
                {menu1.map(link => (
                    <li
                        key={link.text}
                        className={link.className}
                    >
                        <NavLink
                            to={link.to}
                            className={({isActive}) => isActive ? textDecoration : undefined}
                        >
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <ul className='flex gap-3 items-center'>
                {menu2.map(link => (
                    <li
                        key={link.text}
                        className={link.className}
                    >
                        <NavLink
                            to={link.to}
                            className={({isActive}) => isActive ? textDecoration : undefined}
                        >
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default NavBar