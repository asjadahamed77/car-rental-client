import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {

  const navigate = useNavigate()

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      // ss
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <div className="bg-white mt-[80px] px-4 py-8 rounded-lg sm:min-w-[500px] w-full sm:w-fit mx-4 text-mainColor mb-4">
        <h1 className="text-2xl font-bold mb-4 text-mainColor/95">
          Create <span className="text-mainColor">Account</span>
        </h1>
        <p className="text-sm mt-[-4px] text-mainColor/60">
          Join us and start your journey with DriveXchange.
        </p>
        <form onSubmit={submitHandler} className="mt-8 flex flex-col gap-4">
          <div className="w-full ">
            <p className="text-lg font-medium">Name</p>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-2 py-3 mt-2 rounded-lg border border-mainColor"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              required
            />
          </div>
          <div className="w-full ">
            <p className="text-lg font-medium">Email</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 py-3 mt-2 rounded-lg border border-mainColor"
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              required
            />
          </div>
          <div className="w-full ">
            <p className="text-lg font-medium">Phone</p>
            <input
              type="number"
              placeholder="Your phone"
              className="w-full p-2 py-3 mt-2 rounded-lg border border-mainColor"
              name="phone"
              onChange={onChangeHandler}
              value={data.phone}
              required
            />
          </div>
          <div className="w-full ">
            <p className="text-lg font-medium">Password</p>
            <input
              type="password"
              placeholder="Your password"
              className="w-full p-2 py-3 mt-2 rounded-lg border border-mainColor"
              name="name"
              onChange={onChangeHandler}
              value={data.password}
              required
            />
          </div>
          <button type="submit" className="w-full rounded-lg bg-mainColor text-white py-3  mt-4 hover:bg-mainColor/85 duration-300 transition-all">
              Create Account
          </button>
        </form>
        <p className="text-mainColor/60 mt-8 text-sm">Already have an acccount? <span onClick={()=> navigate('/login')} className="text-mainColor hover:underline transition-all ease-linear duration-300 cursor-pointer">Click here</span></p>
      </div>
    </div>
  );
};

export default CreateAccount;
