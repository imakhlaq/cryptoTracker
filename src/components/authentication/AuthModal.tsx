import { useState } from "react";

const AuthModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(true)}
      className="p-2 md:px-4 bg-[gold] rounded-md text-black font-semibold"
    >
      SignIn
    </button>
  );
};
export default AuthModal;
