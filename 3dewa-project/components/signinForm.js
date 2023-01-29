export const SigninForm = () => {
  return (
    <form className="flex flex-col gap-1 w-[26rem] mb-7">
      <h1 className="mx-auto font-bold text-2xl">Sign In</h1>
      <label className="flex flex-col gap-2">
        <span className="font-medium text-lg">Email</span>
        <input
          type="email"
          placeholder="Your email"
          className="border p-2 outline-none text-black"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-medium text-lg">Password</span>
        <input
          type="password"
          placeholder="Your password"
          className="border p-2 outline-none text-black"
        />
      </label>
      <button className="bg-blue-500 mt-3 p-1 text-lg text-blue-900 font-medium transition hover:scale-90 delay-150">
        Sign In
      </button>
    </form>
  );
};
