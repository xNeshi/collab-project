"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { handlerPreventDefault } from "@/lib/utils";
import SignInButton from "./SignInButton";
import { User } from "lucide-react";

type SignInModalProps = {
  onSignIn: () => Promise<void>;
};

export const SignInModal = ({ onSignIn }: SignInModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex gap-3 items-center cursor-pointer">
          <div className="rounded-full bg-gray-200 p-2">
            <User size={25} />
          </div>

          <span className="cursor-pointer hidden sm:block">Sign In</span>
        </div>
      </DialogTrigger>
      <DialogContent className="font-work-sans sm:w-120 ">
        <DialogHeader>
          <DialogTitle>Log In</DialogTitle>
          <DialogDescription>
            Sign in with your Google account to continue. We do not store any
            sensitive information from your account.
          </DialogDescription>
        </DialogHeader>
        <form action={onSignIn}>
          <SignInButton />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
