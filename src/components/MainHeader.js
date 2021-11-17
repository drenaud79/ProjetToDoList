import { NavLink } from 'react-router-dom';

const MainHeader = () => {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/welcome">Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink to="/todolist">ToDo List</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default MainHeader;