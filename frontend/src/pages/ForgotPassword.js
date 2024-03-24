import axios from "axios";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { toast } from "react-toastify";

const URL = process.env.REACT_APP_BACKEND_URL + "/api/forgotPassword";

const ForgotPassword = () => {
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const email = ev.target.email.value;
    const formData = { email: email };
    const res = await axios.post(URL, formData);
    const data = res.data;
    console.log(data);
    if (data.success === true) toast.success(data.message);
    else toast.error(data.message);
  };

  return (
    <div className="flex justify-center my-4">
      <Card className="w-full max-w-lg">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          Forgot Password
        </h5>
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" className="required" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mt-2 block">
            <Button className="w-full" type="submit" color="purple">
              Submit
            </Button>
          </div>
          <p className="text-center text-sm text-gray-500">
            Remember your password?{" "}
            <a
              href="login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login Here
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default ForgotPassword;
