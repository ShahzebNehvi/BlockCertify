function LoginForm() {
  return (
    <div
      className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#060B0F", minHeight: "100vh" }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 ">
        Login
      </h2>
      <form className="bg-[#060B0F] p-6 sm:p-8 rounded-xl w-full max-w-md shadow-lg transition-transform transform hover:scale-105">
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none rounded-xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#ffffff1a] backdrop-blur-md border-white transition-transform transform hover:scale-105 focus:ring-2 focus:ring-[#94a3ad]"
            id="username"
            type="text"
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none rounded-xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#ffffff1a] backdrop-blur-md border-white transition-transform transform hover:scale-105 focus:ring-2 focus:ring-[#94a3ad]"
            id="password"
            type="password"
            placeholder="******************"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-[#202d37] hover:text-[#202d37] hover:bg-[#94a3ad] text-white py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full transition-transform transform hover:scale-105"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
