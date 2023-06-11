import './logout.css'
import {BiSearch, BiTime} from "react-icons/bi"
import {signOut} from "firebase/auth"
import { auth } from '../../firebase-config/config';



const Logout = ({setToggle}) => {
  const handleSigOut = async () => {
    await signOut(auth)
  }
  const handleCan = () => {
    setToggle(prev => !prev)
  }
  return (
    <section className="logout">
      <div>
      <button onClick={handleSigOut} ><BiSearch /> sign out</button>
      <BiTime onClick={handleCan} className='logout' />
      </div>
    </section>
  )
}

export default Logout
