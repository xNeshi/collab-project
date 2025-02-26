import Image from "next/image";
import Link from "next/link";
import { auth, signOut, signIn } from "../app/auth";

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
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-3 m-2 ml-3"
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
          />
        </Link>
        <div className="flex items-center gap-8 text-xl text-black">
          {session && session?.user ? (
            <>
              <Link href="/project/create">
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

              <Link href={`/users/${session?.user.id}`}>
                <span className="line-clamp-1">{session?.user.name}</span>
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
