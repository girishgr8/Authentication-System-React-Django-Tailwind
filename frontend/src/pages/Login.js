import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { toast } from "react-toastify";
import { useEffect } from "react";

const URL = process.env.REACT_APP_BACKEND_URL + "/api/login";

const Login = (props) => {
  let navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = props;

  useEffect(() => {
    if (isLoggedIn) navigate("profile");
  });

  const handleLogin = async (ev) => {
    ev.preventDefault();
    const email = ev.target.email.value;
    const password = ev.target.password.value;
    const formData = { email: email, password: password };
    const res = await axios.post(URL, formData);
    const data = res.data;
    if (data.success === true) {
      toast.success(data.message);
      setIsLoggedIn(true);
      navigate("/profile");
    } else toast.error(data.message);
  };

  return (
    <div className="w-full flex justify-center my-4">
      <Card className="w-full max-w-lg">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          Login to your account
        </h5>
        <form
          className="w-full flex max-w-md flex-col gap-4"
          onSubmit={handleLogin}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" className="required" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2 block">
              <Label htmlFor="password" value="Password" className="required" />
              <div className="text-sm">
                <a
                  href="forgotPassword"
                  className="font-semibold text-purple-600 hover:text-purple-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="Your Password"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" color="purple" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button className="w-full" type="submit" color="purple">
            Submit
          </Button>

          <p className="text-center text-sm text-gray-500">
            Not yet registered?{" "}
            <a
              href="register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register Here
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Login;
