import React from 'react'

const Admin = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center px-4">
  <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to Your Account</h2>

    <form className="space-y-5">
      <div>
        <label htmlFor="email" className="block  mb-1 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="pass" className="block mb-1 text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="pass"
          id="pass"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
      >
        Sign In
      </button>
    </form>

    <p className="mt-6 text-sm text-center text-gray-500">
      Don't have an account? <a href="#" className="text-blue-600 hover:underline">Contact Lead</a>
    </p>
  </div>
</div>

        </>
    )
}

export default Admin
