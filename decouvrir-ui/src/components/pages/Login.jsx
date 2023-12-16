import { Link } from 'react-router-dom';

import '../../resources/sass/login.scss';

const Login = () => {
    return (
        <div className="p-login">
            <div className="card">
                <div className="card-info">
                    <h1>Hello World!!!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem soluta enim tempora ipsam suscipit, aliquid ea odit atque corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div>
                        <span>Don&apos;t have an account?</span>
                        <Link to="/auth/register" style={{ color: 'inherit', textDecoration: 'inherit', display: 'flex', justifyContent: 'center' }}>
                            <button>register</button>
                        </Link>
                    </div>
                </div>
                <div className="card-form">
                    <h1>Login</h1>
                    <form method="post">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button>login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
