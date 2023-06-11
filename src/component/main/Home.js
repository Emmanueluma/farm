import './home.css'
import Nav from './nav/Nav';
import { Outlet } from 'react-router-dom';
const Farm = () => {
    return ( 
        <>
            <Outlet />
            <Nav />
        </>
    );
}
 
export default Farm;