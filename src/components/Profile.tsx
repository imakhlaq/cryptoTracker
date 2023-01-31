import { useAppSelector } from "../store/hooks";

const Profile = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="h-10 w-10 bg-slate-50 rounded-full cursor-pointer">
      <img src={user?.picture ?? "dadadad"} alt="" />
    </div>
  );
};
export default Profile;
