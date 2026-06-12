import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login(props) {
  const navigate = useNavigate();

  const [eusername, setEusername] = useState("");
  const [epassword, setEpassword] = useState("");
  const [ruser, setRuser] = useState(true);

  const { user } = props;

  const checkUser = () => {
    const found = user.find(
      (item) =>
        item.username === eusername &&
        item.password === epassword
    );

    if (found) {
      setRuser(true);

      navigate("/landing", {
        state: {
          username: found.username,
        },
      });
    } else {
      setRuser(false);
    }
  };

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hii :)</h1>

        {ruser ? (
          <p>I help you manage your tasks efficiently after login.</p>
        ) : (
          <p className="text-red-500">
            Please Signup Before Logging In
          </p>
        )}

        <div className="flex flex-col gap-5 my-2">
          <input
            type="text"
            placeholder="Username"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            onChange={(e) => setEusername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            onChange={(e) => setEpassword(e.target.value)}
          />

          <button
            className="bg-[#8272DA] w-24 p-1 rounded-md hover:cursor-pointer"
            onClick={checkUser}
          >
            Login
          </button>

          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;