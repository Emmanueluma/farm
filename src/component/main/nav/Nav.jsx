import { NavLink } from "react-router-dom";
import './nav.css'
import {TbSmartHome} from 'react-icons/tb'
import {GiBull} from 'react-icons/gi'
import {GiFarmTractor} from 'react-icons/gi'
import {FaSeedling} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'


const Nav = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to="trend"><TbSmartHome /></NavLink></li>
            <li><NavLink to="animal"><GiBull /></NavLink></li>
            <li><NavLink to="machine"><GiFarmTractor /></NavLink> </li>
            <li><NavLink to="food"><FaSeedling /></NavLink> </li>
            <li><NavLink to="user"><FiUser /></NavLink> </li>
            <div className="indicator"></div>
        </ul>
    </nav>
  )
}

export default Nav
