import { SigninForm, GoogleAuthButton } from "components";

export const SigninModal = () => {
  return (
    <div className="shadow-2xl bg-blue-800 p-3 text-white">
      <SigninForm />
      <hr />
      <span className="p-2 bg-blue-800 relative -top-[16px] left-[47%] text-lg">
        Or
      </span>
      <GoogleAuthButton label="Sign in with Google" />
    </div>
  );
};
