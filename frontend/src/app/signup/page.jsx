import Link from 'next/link';
import Swal from 'sweetalert2';

const Signup = () => {
    return (
        <div className="hero min-h-[700px]">
            <div className="hero-content flex-col lg:flex-row-reverse gap-14">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-green-800">Signup now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                        </div>
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
                            <input name='pass' type="password" placeholder="Password" className="input input-bordered" required />
                            <p className='mt-2 font-semibold'>
                                Already have an account? 
                                <Link href='/'>
                                     Please Login
                                </Link>
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
