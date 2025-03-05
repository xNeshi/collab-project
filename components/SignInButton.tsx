import React from "react";
import { Button } from "./ui/button";
import { Icon } from "lucide-react";
import { GoogleLoginButton } from "react-social-login-buttons";

export const SignInButton = () => {
  return (
    <GoogleLoginButton
      type="submit"
      className="!text-[18px] !px-5 !rounded-3xl"
    />
  );
};

export default SignInButton;
