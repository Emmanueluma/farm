import {Link, useNavigate} from "react-router-dom"
import './login.css'
import {useEffect, useState} from "react"
import { signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { auth } from "../../firebase-config/config"
import Spinner from "../spinner/Spinner"

const Login = () => {
    
    useEffect(() => {
        signOut(auth);
    },[])
    const navigator = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleForm = (e) => {
            setFormData(prev => {
                return(
                    {
                        ...prev, [e.target.name]: e.target.value
                    
                    }
                )
            }
        )
    }
    const [vaLSpin, setVaLSpin] = useState(false);
    const [lSame, setLSame] = useState('');
    const [vaLEmail, setVaLEmail] = useState("");
    const [vaLPassword, setVaLPassword] = useState("");
    const initLsetUp = () => {
        setVaLEmail('');
        setVaLPassword('');
        setLSame('');
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setVaLSpin(prev => !prev);
        initLsetUp();
        if(formData.email && formData.password){
            try{
                await signInWithEmailAndPassword(auth, formData.email, formData.password);
                setVaLSpin(prev => !prev);
                if(auth.currentUser){
                    navigator('/home');
                }
            }catch(err){
                setLSame(`${err}`);
                setVaLSpin(prev => !prev);
            }
        }else if (formData.email == "" && formData.password == ""){
            setVaLSpin(prev => !prev);
            setVaLEmail('input yout email');
            setVaLPassword('input yout password');

        }else{
            if(formData.email == ""){
                setVaLSpin(prev => !prev);
                setVaLEmail('input yout email');
            }
            if(formData.password == ""){
                setVaLSpin(prev => !prev);
                setVaLPassword('input yout password');
            }
        }
    }
    return (
        <>
            {vaLSpin && <Spinner />}
            <section className="login">
                <div className='welcometext'>
                    <h1>welcome to</h1>
                    <p>mai-liyafa farm</p>
                </div>
                <form>
                <div className="input">
                    <div>
                        <h3>user name: <span>{vaLEmail}</span></h3>
                        <input className="emailfield" type="text" name="email" value={formData.email} onChange={handleForm} />
                    </div>
                    <div>
                        <h3>password: <span>{vaLPassword}</span></h3>
                        <input type="password" name="password" value={formData.password} onChange={handleForm} />
                        <p className="same">{lSame}</p>
                    </div>
                </div>
                <div className="button">
                    <button onClick={handleSubmit} className="btn">login</button>
                    <p>don't have an account <Link to="/register" className="pa">register now</Link></p>
                </div>
            </form>
            </section>
        </>
    );
}
 
export default Login;