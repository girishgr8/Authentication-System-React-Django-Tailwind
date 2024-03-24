import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import CountryInput from "../components/CountryInput";
import { useEffect } from "react";

const URL = process.env.REACT_APP_BACKEND_URL + "/api/register";
const Register = (props) => {
  const { isLoggedIn, setIsLoggedIn } = props;
  let navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate("profile");
  });

  const handleRegister = async (ev) => {
    ev.preventDefault();
    const name = ev.target.name.value;
    const email = ev.target.email.value;
    const password = ev.target.password.value;
    const confirmpassword = ev.target.confirmpassword.value;
    const country = ev.target.country.value;
    const phone = ev.target.phone.value;
    if (country === "Select Country") toast.error("Select your country !");
    if (password !== confirmpassword) toast.error("Passwords do not match !");

    const formData = {
      name: name,
      email: email,
      password: password,
      country: country,
      phone: phone,
    };
    try {
      const res = await axios.post(URL, formData);
      const data = res.data;
      if (data.success === true) {
        toast.success(data.message);
        setIsLoggedIn(true);
        navigate("/profile");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log("Some error occured", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            Create an account
          </h1>
          <form
            className="space-y-4 md:space-y-"
            action="POST"
            onSubmit={handleRegister}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Name" className="required" />
              </div>
              <TextInput
                id="name"
                name="name"
                type="input"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" className="required" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password"
                  value="Password"
                  className="required"
                />
              </div>
              <TextInput
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="confirmpassword"
                  value="Confirm Password"
                  className="required"
                />
              </div>
              <TextInput
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Re-enter Password"
                required
              />
            </div>

            <CountryInput />
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Phone Number" />
              </div>
              <TextInput id="phone" name="phone" type="input" maxLength={10} />
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <Checkbox
                  id="terms"
                  aria-describedby="terms"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-purple-600 dark:ring-offset-gray-800"
                  color="purple"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <Label
                  htmlFor="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  <a
                    className="font-medium text-purple-600 hover:underline dark:text-purple-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </Label>
              </div>
            </div>
            <Button className="w-full" type="submit" color="purple">
              Create an account
            </Button>
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Login Here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
