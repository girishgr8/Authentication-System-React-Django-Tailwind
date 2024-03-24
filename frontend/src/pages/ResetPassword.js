import { React } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { toast } from "react-toastify";

const URL = process.env.REACT_APP_BACKEND_URL + "/api/resetPassword";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  let navigate = useNavigate();
  const id = searchParams.get("id");
  const token = searchParams.get("token");

  const handleResetPassword = async (ev) => {
    ev.preventDefault();
    const newpassword = ev.target.newpassword.value;
    const confirmpassword = ev.target.confirmpassword.value;
    if (newpassword !== confirmpassword)
      toast.error("Passwords do not match !");
    const formData = { id: id, token: token, password: newpassword };
    const res = await axios.post(URL, formData);
    const data = res.data;
    if (data.success === true) {
      toast.success(data.message);
      navigate("/login");
    } else toast.error(data.message);
  };

  return (
    <div className="w-full flex justify-center my-4">
      <Card className="w-full max-w-lg">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          Reset Password
        </h5>
        <form
          className="w-full flex max-w-md flex-col gap-4"
          onSubmit={handleResetPassword}
        >
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="newpassword"
                value="New Password"
                className="required"
              />
            </div>
            <TextInput
              id="newpassword"
              name="newpassword"
              type="password"
              placeholder="New Password"
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
              id="confirmpassword"
              name="confirmpassword"
              type="password"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="mt-2 block">
            <Button className="w-full" type="submit" color="purple">
              Submit
            </Button>
          </div>

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

export default ResetPassword;
