import { AppleLogo, FacebookLogo, GoogleLogo, SpotifyLogo } from "phosphor-react"

function App() {

  return (
     <main className="h-screen w-full flex flex-col items-center gap-4">
        <header className="flex justify-center p-4 border border-gray-300 w-screen">
          <img className="w-20" src="https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-7-1.png" alt="" />
        </header>

        <div className="flex flex-col gap-2">
          <button className="bg-blue-500 flex items-center gap-3 px-20 rounded-xl text-white">
            <FacebookLogo size={32} color="#1f2320" />
            <span>CONTINUE WITH FACEBOOK</span>
          </button>
          <button className="bg-black flex items-center gap-3 px-20 rounded-xl text-white">
            <AppleLogo size={32} color="white" />
            <span>CONTINUE WITH APPLE</span>
          </button>
          <button className="bg-white border flex items-center gap-3 px-20 rounded-xl text-black">
           <GoogleLogo size={32} color="#1f2320" weight="bold" />
            <span>CONTINUE WITH GOOGLE</span>
          </button>
        </div>

        <div className="w-screen flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <form action="">
          <div className=" flex flex-col mb-4">
            <label className="font-bold" htmlFor="email">Email address or username
            </label>
            <input className="border px-4 py-2" id="email" type="text" placeholder="Email address or username" />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-bold" htmlFor="password">Password
            </label>
            <input className="border px-28 py-2" id="password" type="text" placeholder="Password" />
          </div>

          <div className="py-2">
            <button className="text-sm text-blue-600 underline hover:text-blue-800">
              Forgot your password?
            </button>
          </div>
          
          <div className="flex items-center space-x-40">
           <div>
             <input className="accent-green-600 mr-2" type="checkbox"  name="" id="" />Remember me
            </div>
            <div>
              <button className="bg-green-600 border px-8 rounded-xl text-white">
            <span>LOG IN</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col mb-4"></div>
          <hr />
        </form>
        <div className="flex items-center flex-col gap-3">
          <h1 className="font-bold">Don't have an account?</h1>
          <button className="bg-white border flex items-center gap-3 px-28 rounded-xl text-black">
           <span>SIGN UP FOR SPOTIFY</span>
          </button>
        </div>
        
     </main>

     
  )
}

export default App
