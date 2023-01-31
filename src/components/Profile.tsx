import { useAppSelector } from "../store/hooks";

const Profile = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="h-10 w-10 bg-slate-50 rounded-full cursor-pointer overflow-hidden">
      <img
        src={
          user?.picture ??
          "https://secure.gravatar.com/avatar/03dcd7ac0ca81f33eecc10f5f434ca91/?s=48&d=https://images.binaryfortress.com/General/UnknownUser1024.png"
        }
        alt={user?.userName ?? user?.email ?? "profile picure"}
      />
    </div>
  );
};
export default Profile;
