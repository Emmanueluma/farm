import {Link, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import Spinner from "../spinner/Spinner"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import {auth, googleProvider} from '../../firebase-config/config'


const Register = () => {

    useEffect(() => {
        signOut(auth);
    },[])

    const navigator = useNavigate();
    const [spin, setSpin] = useState(false)
    const [vaEmail, setVaEmail] = useState("")
    const [vaPassword, setVaPassword] = useState("")
    const [vaCpassword, setVaCpassword] = useState("")
    const [same, setSame] = useState("")
    const [failedEmail, setFailedEmail] = useState("")
    const [failedGoogle, setFailedGoogle] = useState("")
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
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
    const initSetUp = () =>{
        setVaEmail("");
        setVaPassword("");
        setVaCpassword("");
        setSame("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSame("");
        setSpin(prev => !prev);
        if(formData.email){
            if(formData.password){
                if(formData.confirmPassword){
                    if(formData.password == formData.confirmPassword){
                        try{
                            const user = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
                            setSpin(prev => !prev);
                            console.log(auth.currentUser)
                            if(auth.currentUser){
                                navigator('/home')
                            }
                        }catch(err){
                            initSetUp();
                            setSpin(prev => !prev);
                            setFailedEmail(`${err}`);
                        }
                    }else{
                        setSpin(prev => !prev);
                        setSame('the password must be the same');
                        initSetUp();
                    }
                }else{
                    setSpin(prev => !prev)
                    setVaCpassword('input your comfirm password');
                }
            }else{
                setSpin(prev => !prev);
                setVaPassword('input your password');
            }
        }else{
            setSpin(prev => !prev)
            setVaEmail('input your email')
        }
    }


    return ( 
        <>
            {spin && <Spinner />}
            <section className="login">
                <div className='welcometext'>
                    <h1>welcome to </h1>
                    <p>mai-liyafa farm</p>
                </div>
                
                <form>
                    <div className="input">
                        <div>
                            <h3>email: <span>{vaEmail}</span></h3>
                            <input className="emailfield" type="email" name="email" value={formData.email} onChange={handleForm} required />
                        </div>
                        <div>
                            <h3>password: <span>{vaPassword}</span></h3>
                            <input type="password" name="password" value={formData.password} onChange={handleForm} required />
                        </div>
                        <div>
                            <h3>confirm password: <span>{vaCpassword}</span></h3>
                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleForm} required />
                            <p className="same">{same}</p>
                            <p className="same">{failedEmail}</p>
                            <p className="same">{failedGoogle}</p>
                        </div>
                    </div>
                    
                    <div className="button">
                        <button type="submit" className="btn" onClick={handleSubmit}>sign up</button>
                        <p>already have an account <Link to="/login" className="pa"> login now</Link></p>
                    </div>
                </form>
            </section>
        </>
    );
}
 
export default Register;

