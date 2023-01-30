import { useState } from "react";

const SignPopUp = () => {
  const [auth, setAuth] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [invalid, setInvalid] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (auth === "login") {
      if (password.trim().length === 0 || email.trim().length === 0) {
        setInvalid(true);
        return;
      }
    }

    if (auth === "signup") {
      if (
        password.trim().length === 0 ||
        email.trim().length === 0 ||
        password !== confirmPass
      ) {
        setInvalid(true);
        return;
      }
    }
  };

  return (
    <div className=" w-[20rem] bg-[#14161a] rounded-md shadow-xl">
      <div className="text-white flex justify-between text-lg  font-semibold mt-4 p-3 shadow-2xl">
        <button
          onClick={() => setAuth("login")}
          className={`px-6 py-2 ${
            auth === "login" ? "border-b border-[gold]" : ""
          }`}
        >
          LOGIN
        </button>
        <button
          onClick={() => setAuth("signup")}
          className={`px-6 py-2 ${
            auth === "signup" ? "border-b border-[gold]" : ""
          }`}
        >
          SING UP
        </button>
      </div>

      <form
        className="flex flex-col gap-4 mt-2 p-3 text-white"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          className=" h-10 px-4 rounded-md focus:outline-none placeholder:text-[gray]"
          placeholder="Enter Email Address"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value!)
          }
          onFocus={() => setInvalid(false)}
        />
        <input
          type="password"
          className=" h-10 px-4 rounded-md focus:outline-none placeholder:text-[gray]"
          placeholder="Enter Password"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value!)
          }
          onFocus={() => setInvalid(false)}
        />
        {auth === "signup" ? (
          <input
            type="password"
            className=" h-10 px-4 rounded-md focus:outline-none placeholder:text-[gray]"
            placeholder="Confirm Password"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPass(e.target.value!)
            }
            onFocus={() => setInvalid(false)}
          />
        ) : null}
        {invalid && (
          <p className="text-center text-red-600">Invalid Credentials</p>
        )}
        <button
          type="submit"
          className="h-10 px-4 rounded-md focus:outline-none bg-[#c7a900] text-black font-semibold text-xl hover:bg-[#968211] transition-all ease-in"
        >
          {auth === "login" ? "LogIn" : "SignUp"}
        </button>
      </form>
    </div>
  );
};
export default SignPopUp;
