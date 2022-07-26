import {Link} from 'react-router-dom'
import s from './Signup.module.css'


const Signup = () => {
    return (
        <div className={s.signup}>
            <h2>Sign up</h2>
            <div className={s.signupInput}>
                <input type='text' placeholder='username' required/>
                <input  type='password' placeholder='password' required/>
            </div>
            <div className={s.signupButton}>
                <button>Create account</button>
                <div>
                    <p> Already a forumer ?</p>
                    <Link to='/login'>Log in</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;