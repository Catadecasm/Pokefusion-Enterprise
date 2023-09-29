"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import validator from "validator";
import {loginUser} from '../services/loginService';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newEmail = e.target.value;
    setEmail(newEmail);
  
    if (!validator.isEmail(newEmail)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login button clicked');
    try{
      const response  = await loginUser(email, password);
      Cookies.set('token', response.data.token); 
      router.push('/homepage', { scroll: false })      
    }catch(error){
      if(error.response.status === 400){
        Swal.fire({
          icon:'info',
          title:'Oops...',
          text:'You are already logged in',
          confirmButtonText:'Ok'
        });
        router.push('/homepage', { scroll: false })
      }else if(error.response.status === 500){
        Swal.fire({
          icon:'error',
          title:'Oops...',
          text:'The email or password is incorrect',
          confirmButtonText:'Ok'
        });
      }
    }
  };

  const componentStyle = {
    backgroundColor: "#DC0A2D",
  };

  return (
    <section className="dark:bg-gray-900" style={componentStyle}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div
              className="p-6 space-y-4 md:space-y-6 sm:p-8"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <h1 className="text-2xl font-medium leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Welcome!
              </h1>

              <h1 className="text-[31px] font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Log in to
              </h1>

              <h4
                style={{ fontSize: "16px" }}
                className="font-light leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
              >
                Please enter your credentials to log in.
              </h4>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleLogin}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      emailError ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your email"
                    required
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      onChange={handlePasswordChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-2 flex items-center px-3 text-black focus:outline-none"
                      onClick={togglePasswordVisibility}
                    >
                      <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                        className="text-black"
                      />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Login
                </button>
                <p className="text-sm font-light text-center text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="/subscribe"
                    className="font-semibold text-black hover:underline dark:text-primary-500"
                  >
                    Register
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
