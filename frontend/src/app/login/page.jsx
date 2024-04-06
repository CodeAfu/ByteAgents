import Link from 'next/link';

const Login = () => {
    return (
        <div className="hero min-h-[700px]">
            <div className="hero-content flex-col lg:flex-row-reverse gap-14">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-green-800">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='mt-2 font-semibold'>
                            Don't have an account? 
                            <Link href='/signup'>
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
