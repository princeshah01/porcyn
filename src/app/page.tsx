import { auth, signOut } from "~/auth";
import { LandingPage } from "~/components/sections/landing";

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    return <LandingPage />;
  }

  return (
    <div>
      <h1>Welcome back!</h1>
      <p>{session.user.name}</p>

      <form
        action={async () => {
          "use server";
          await signOut({
            redirectTo: "/",
          });
        }}
      >
        <button type="submit" className="px-4 py-2 bg-black text-white rounded">
          Sign Out
        </button>
      </form>
    </div>
  );
}
