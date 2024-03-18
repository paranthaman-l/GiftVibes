import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import signInWithGoogle from '../../assets/btn_google_signin.png'
import logo from '../../assets/giftvibes.svg'
import Button from '../../components/shared/Button';
const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });
    const [loginError, setLoginError] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
        setLoginError({ ...loginError, [name]: false });
    };

    const Login = (e) => {
        e.preventDefault();
    }
    return (
        // <div className='bg-bgPurple min-h-screen flex justify-end px-40 relative items-center bg-cover bg-black bg-blend-darken bg-opacity-20'>
        //     <div className="absolute top-10 left-10">
        //         <img src={logo} alt="" className='h-24 w-32' />
        //     </div>
        //     <form
        //         action=""
        //         onSubmit={Login}
        //         className="flex rounded-2xl justify-around flex-col p-8 items-center bg-white bg-opacity-50"
        //     >
        //         <p className="text-4xl flex mx-10 my-4 font-bold font-grotesk items-start">
        //             Login
        //         </p>
        //         <input
        //             type="email"
        //             className={`border-gray bg-opacity-50 focus:border-lightPink focus:placeholder:text-[#9ca3af] ${loginError.email && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[300px] rounded-lg outline-none border-[2.0px] `}
        //             placeholder="Email"
        //             name="email"
        //             id="email"
        //             onChange={handleChange}
        //             value={login.email}
        //         />
        //         <input
        //             className={`border-gray bg-opacity-50 focus:border-lightPink focus:placeholder:text-[#9ca3af] ${loginError.password && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-3 h-[50px] px-[20px] py-[10px] text-lg min-w-[300px] rounded-lg outline-none border-[2.0px] `}
        //             placeholder="Password"
        //             type="password"
        //             name="password"
        //             id="password"
        //             onChange={handleChange}
        //         />
        //         <button className='purple-pink tracking-wider my-1'>Login</button>
        //         <p className='font-poppins font-medium'>or</p>
        //         <img className="h-12 object-cover cursor-pointer rounded-xl my-1" src={signInWithGoogle} alt="" />
        //         <p>Do not have a Account?  <span
        //             onClick={() => navigate("/signUp")}
        //             className="text-blue hover:underline  hover:text-hoverBlue font-semibold cursor-pointer"
        //         >
        //             Click here
        //         </span></p>
        //     </form>
        // </div>
        <div className="min-h-screen flex justify-end px-40 relative items-center w-full">
            <form className='font-grotesk w-4/12 max-xl:w-full'>
                <p className='text-darkGreen font-bold text-3xl'>Login</p>
                <div className="text-darkGreen">
                    <div className="flex flex-col my-6">
                        <label className='my-1' htmlFor="username">Username or email address <span className='text-red'>*</span></label>
                        <input id='username' type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Username or email address...' />
                    </div>
                    <div className="flex flex-col my-6">
                        <label className='my-1' htmlFor="password">Password <span className='text-red'>*</span></label>
                        <input id='password' type="password" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Password...' />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <input type="checkbox" className='mr-2 cursor-pointer' name="" id="" />
                            <p className='text-opacity-70 text-darkGreen'>Remember me</p>
                        </div>
                        <div className="">
                            <p className='underline decoration-dashed decoration-darkGreen border-darkGreen text-darkGreen cursor-pointer'>Lost your password?</p>
                        </div>
                    </div>
                    <div className="my-4">
                        <p><Button title={"Log in"} style={"w-full py-4"} /></p>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className='mx-2'>or Sign in With</p>
                        <div className="">
                            <svg className='hover:scale-105 duration-200 ease-in-out rounded-full cursor-pointer h-8 w-8 ' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-center my-2">
                        <p>New to our platform? <span className='underline decoration-dashed decoration-darkGreen border-darkGreen text-darkGreen cursor-pointer' onClick={()=>navigate('/signUp')}>Sign up now!</span></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login