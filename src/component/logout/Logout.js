import './logout.css'
import {GoSignOut} from "react-icons/go"
import {GiCancel} from "react-icons/gi"
import {signOut} from "firebase/auth"
import { auth } from '../../firebase-config/config';
import {useNavigate} from 'react-router-dom'

const Logout = ({setToggle}) => {
  const nav = useNavigate();
  const handleSigOut = async () => {
      await signOut(auth)
      nav("/");

  }
  const handleCan = () => {
    setToggle(prev => !prev)
  }
  return (
    <section className="logout">
      <div>
      <button onClick={handleSigOut} ><GoSignOut /> sign out</button>
      <GiCancel onClick={handleCan} className='logout' />
      </div>
    </section>
  )
}

export default Logout
