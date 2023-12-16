import { Link } from 'react-router-dom';
import ProfilePic from '../../assets/img/default-prof.jpg';

import '../../resources/sass/register.scss';

const Register = () => {
    return (
        <div className="p-register">
            <div className="card">
                <div className="card-info">
                    <h1>Discover Yourself.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem soluta enim tempora ipsam suscipit, aliquid ea odit atque corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div>
                        <span>Already have an account?</span>
                        <Link to="/auth/login" style={{ color: 'inherit', textDecoration: 'inherit', display: 'flex', justifyContent: 'center' }}>
                            <button>login</button>
                        </Link>
                    </div>
                </div>
                <div className="card-form">
                    <h1>Register</h1>
                    <form method="post">
                        <div>
                            <input type="file" id="profilePic" accept="image/*" placeholder="profpic" />
                            <label htmlFor="profilePic">
                                <img src={ProfilePic} alt="default-profpic" />
                            </label>
                        </div>
                        <input type="text" placeholder="name" />
                        <input type="email" placeholder="email" />
                        <input type="text" placeholder="username" />
                        <input type="text" placeholder="password" />
                        <button>register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
