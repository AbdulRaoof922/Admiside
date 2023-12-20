import { Link } from "react-router-dom";
import loginimage from "../../assets/Images/loginimage.png";
import { TiSocialFacebook,  } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";


function Login() {
  return (
    <>
      <div className="flex min-h-full  flex-1 flex-col justify-center px-6 py-20 lg:px-8 bg-[#F8F8F8] ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-[#F8F8F8] ">
          <img className="w-auto h-40 mx-auto" src={loginimage} alt="Your Company" />
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <Link to="/dashboard">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Login
                </button>
              </Link>
            </div>
          </form>
          <div className="flex items-center justify-center mt-8">
          <Link to="https://www.facebook.com/">
          <TiSocialFacebook size={60} className="text-blue-600"/>

          </Link>
          <Link to="https://www.google.com/">
          <FcGoogle size={40} className="" />          

          </Link>

          </div>
        </div>
      </div>
    </>
  );
}
export default Login

