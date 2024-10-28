import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineLock } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../redux/authApiSlice';
import SinginLogo from '../../assets/signinlogo.png';
import { MdOutlineEmail } from 'react-icons/md';
import Loader from '../../components/common/Loader';
import toast from 'react-hot-toast';
import { setLoggedInUserInfo } from '../../redux/authSlice';

const LoginPage = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      toast.dismiss();
      const res = await login({ email, password }).unwrap();
      if (res.success) {
        toast.success(res.msg);
        dispatch(setLoggedInUserInfo(res));
        navigate('/');
      } else {
        toast.error(res.msg);
      }
    } catch (error) {
      toast.error(error.data.msg);
      console.log(`Error ${error.data.msg}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="mb-16 text-center text-3xl font-extrabold text-gray-800 dark:text-gray-100">
        Admin Dashboard
      </h1>

      <div className="w-full max-w-6xl flex flex-col xl:flex-row items-center justify-between">
        <div className="w-full xl:w-1/2 text-center mb-8 xl:mb-0">
          <img
            className="w-48 sm:w-64 xl:w-96 mx-auto dark:hidden"
            src={SinginLogo}
            alt="Logo"
          />
        </div>
        <div className="w-full xl:w-1/2 px-4 sm:px-12.5 xl:px-16">
          <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
            Sign In
          </h2>

          <form onSubmit={handleLogin}>
            {/* email Input */}
            <div className="mb-4">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Type email
              </label>
              <div className="relative">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
                <span className="absolute right-4 top-4 text-gray-500">
                  <MdOutlineEmail size={22} />
                </span>
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Type Password
              </label>
              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="6+ Characters, 1 Capital letter"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
                <span className="absolute right-4 top-4 text-gray-500">
                  <AiOutlineLock size={22} />
                </span>
              </div>
            </div>

            {/* Loader and Submit Button */}
            <div className="mb-5">
              {isLoading ? (
                <Loader />
              ) : (
                <input
                  type="submit"
                  value="Login"
                  className="w-full cursor-pointer rounded-lg border border-purple-600 bg-purple-600 p-4 text-white transition duration-300 ease-in-out transform hover:bg-purple-700 hover:text-blue-100 hover:shadow-lg active:translate-y-0"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
