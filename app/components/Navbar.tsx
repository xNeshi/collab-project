import Image from "next/image";
import Link from "next/link";
import { auth, signOut, signIn } from "../auth";
import { redirect } from "next/dist/server/api-utils";

export const Navbar = async () => {
  const session = await auth();
  const logoSize = { width: 120, height: 20 };

  const handleSignIn = async () => {
    "use server";
    await signIn("google");
  };

  const handleSignOut = async () => {
    "use server";
    await signOut({ redirectTo: "/" });
  };

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={logoSize.width}
            height={logoSize.height}
            className="m-3"
          />
        </Link>
        <div className="flex items-center gap-8 text-xl text-black">
          {session && session?.user ? (
            <>
              <Link href="/collab/create">
                <span>Create</span>
              </Link>

              <form action={handleSignOut}>
                <button
                  type="submit"
                  className=" cursor-pointer"
                >
                  Logout
                </button>
              </form>

              <Link href={`/users/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form action={handleSignIn}>
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
