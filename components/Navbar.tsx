import Image from "next/image";
import Link from "next/link";
import { auth, signOut, signIn } from "../app/auth";
import SignInModal from "./SignInModal";
import { Sign } from "crypto";
import { LogOutIcon, Plus } from "lucide-react";

export const Navbar = async () => {
  const session = await auth();
  const logoSize = { width: 250, height: 30 };
  const logoOnlySize = { width: 50, height: 50 };

  const handleSignIn = async () => {
    "use server";
    await signIn("google");
  };

  const handleSignOut = async () => {
    "use server";
    await signOut({ redirectTo: "/" });
  };

  return (
    <header className="px-7 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-3 m-2 "
        >
          <Image
            src="/logo-only-xl.png"
            alt="logo only"
            width={logoOnlySize.width}
            height={logoOnlySize.height}
          />
          <Image
            src="/latest-logo.png"
            alt="logo"
            width={logoSize.width}
            height={logoSize.height}
            className="hidden sm:block"
          />
        </Link>
        <div className="flex items-center gap-2 sm:gap-5 text-xl text-black">
          {session && session?.user ? (
            <>
              <Link href="/project/create">
                <Plus className="bg-gray-200 hover:bg-gray-300 p-3 size-11.5 rounded-full cursor-pointer" />
              </Link>

              <form
                action={handleSignOut}
                className="flex flex-fill"
              >
                <button type="submit">
                  <LogOutIcon className="bg-gray-200 hover:bg-gray-300 p-3 size-11.5 rounded-full cursor-pointer" />
                </button>
              </form>

              <Link href={`/users/${session?.user.id}`}>
                <div className="flex gap-3 items-center cursor-pointer">
                  <div>
                    <img
                      src={session?.user.image ?? ""}
                      alt="user profile"
                      className="rounded-full size-11"
                    />
                  </div>
                  <span className="hidden md:block">{session?.user.name}</span>
                </div>
              </Link>
            </>
          ) : (
            <SignInModal onSignIn={handleSignIn} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
