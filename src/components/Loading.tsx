const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div
        className="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-yellow-500
      "
        role="status"
      >
        <span className="">Loading...</span>
      </div>
    </div>
  );
};
export default Loading;
