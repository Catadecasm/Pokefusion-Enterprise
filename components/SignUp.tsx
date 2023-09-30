"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import validator from "validator";
import Swal from 'sweetalert2';
import {signUpUser} from '../services/sign_up';
import { useRouter } from 'next/navigation'

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username,setUsername] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState("trainer");
  const [isFormValid, setIsFormValid] = useState(false);
  const router = useRouter()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (!validator.isEmail(newEmail)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsFormValid(
      validator.isLength(newPassword, { min: 8 }) && /[A-Z]/.test(newPassword)
    );
    if (!validator.isLength(newPassword, { min: 8 })) {
      setPasswordError("Password must be at least 8 characters long");
    } else if (!/[A-Z]/.test(newPassword)) {
      setPasswordError("Password must contain at least one uppercase letter");
    } else {
      setPasswordError("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      try{
        const response = await signUpUser(email, password,username,selectedRole);
        Swal.fire({
          title: "Success!",
          text: "Your account has been created successfully with id: "+response.data.id+"\n and email: "+response.data.username,
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push('/login', { scroll: false }) 
          }
        });

      }catch(err){        
        Swal.fire({
          title: "Error!",
          text: "We couldn't create your account, you may already have an account with this email or this username",
          icon: "error",
          confirmButtonText: "OK",
        });
        router.push('/subscribe', { scroll: false })
      }
    }else{
      Swal.fire({
        title: "Error!",
        text: "Please fill the form correctly",
        icon: "error",
        confirmButtonText: "OK",
      });
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
                Sign up to
              </h1>

              <h4
                style={{ fontSize: "16px" }}
                className="font-light leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
              >
                Please enter your credentials to create an account.
              </h4>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    User name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Role
                  </label>
                  <select
                    name="role"
                    id="role"
                    value={selectedRole}
                    onChange={handleRoleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="trainer">Trainer</option>
                    <option value="doctor">Doctor</option>
                    <option value="professor">Professor</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
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
                </div>
                {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                  )}
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
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-2 flex items-center px-4 text-black focus:outline-none"
                      onClick={togglePasswordVisibility}
                    >
                      <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                        className="text-black"
                      />
                    </button>
                  </div>
                  {passwordError && (
                      <p className="text-red-500 text-sm mt-1">
                        {passwordError}
                      </p>
                    )}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 "
                >
                  Sign up
                </button>              
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
