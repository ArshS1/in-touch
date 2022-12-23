import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
// running on browser side
function signIn({ providers }) {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="mt-0">
              <img
                className="w-80"
                src="https://media.tenor.com/MaIKnvKAQv8AAAAM/snoopy-typing.gif"
                alt="inTouch image"
              />
              <button
                className="p-3 bg-[#f14105] rounded-lg text-white mt-2"
                // redirect to homepage after valid session
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// running on the server / before browser side
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signIn;
