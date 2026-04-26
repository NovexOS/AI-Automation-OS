import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = async () => {

const { data, error } = await supabase.auth.signInWithPassword({
  email: email,
  password: password
})

if(error){
  alert(error.message)
}else{
  alert("Login successful")
  window.location.href="/dashboard"
}

}

    return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-xl w-96 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button 
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white p-2 rounded mb-4">
          Login
        </button>

        <p className="text-center mb-4">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>

        <div className="text-center mb-3">Or</div>

        <button className="w-full border p-2 rounded mb-3">
          Login with Facebook
        </button>

        <button className="w-full border p-2 rounded">
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;