import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
// running on browser side
function signIn({ providers }) {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img className="w-80" src="" alt="inTouch image" />
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-300 rounded-lg text-white"
                // redirect to homepage after valid session 
                onClick={() => SignIntoProvider(provider.id, {callbackUrl: "/"})}
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
