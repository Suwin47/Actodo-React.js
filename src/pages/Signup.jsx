import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup(props) {
  const { user, setUser } = props;
  const navigate = useNavigate();

  const [eusername, setEusername] = useState("");
  const [epassword, setEpassword] = useState("");

  const addUser = () => {
    const newUser = {
      username: eusername,
      password: epassword,
    };

    setUser([...user, newUser]);

    navigate("/");
  };

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hii !</h1>

        <p>Sign up to get started :)</p>

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

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
          />

          <button
            className="bg-[#FCA201] w-24 p-1 rounded-md hover:cursor-pointer"
            onClick={addUser}
          >
            Signup
          </button>

          <p>
            Already have an account?{" "}
            <Link to="/" className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;