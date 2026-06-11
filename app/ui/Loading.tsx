export const Loading = () => {
  return (
    <div className="inset-0 fixed w-full h-full flex items-center flex-1 justify-center bg-white ">
      <div className="flex flex-col items-center gap-5">
        <div className="w-10 h-10 rounded-full border-4 border-y-zinc-700 border-l-zinc-700 animate-spin"></div>{" "}
        <div>Loading .... Please wait a little</div>
      </div>
    </div>
  );
};
