import {NavLink} from 'react-router-dom'

let menu1 = [
    {
        to: '/',
        text: 'Shopi',
        className: 'font-semibold text-lg'
    },
    {
        to: '/',
        text: 'All',
        className: ''
    },
    {
        to: '/clothes',
        text: 'clothes',
        className: ''
    },
    {
        to: '/electronics',
        text: 'electronics',
        className: ''
    },
    {
        to: '/furnitures',
        text: 'furnitures',
        className: ''
    },
    {
        to: '/toys',
        text: 'toys',
        className: ''
    },
    {
        to: '/others',
        text: 'others',
        className: ''
    },
]

let menu2 = [
    {
        to: '/email',
        text: 'juanmer382@gmail.com',
        className: 'text-black/60'
    },
    {
        to: '/myorders',
        text: 'My orders',
        className: ''
    },
    {
        to: '/myoccount',
        text: 'My occount',
        className: ''
    },
    {
        to: '/signin',
        text: 'Sign in',
        className: ''
    },
    {
        to: '/shoppcar',
        text: '🛒',
        className: ''
    },
]

const NavBar = () => {
    const textDecoration = 'underline underline-offset-4'
    return (
        <nav className="flex items-center justify-between fixed z-10 w-full py-5 px-8 text-sm font-light">
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