import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

const handleSignup = async () => {

  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[placeholder="Create password"]').value;

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Signup successful");
  }

};

function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-xl w-96 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4 rounded"
        />

        <input
          type="password"
          placeholder="Create password"
          className="w-full border p-2 mb-4 rounded"
        />

        <input
          type="password"
          placeholder="Confirm password"
          className="w-full border p-2 mb-4 rounded"
        />

       <button 
onClick={handleSignup}
className="w-full bg-blue-600 text-white p-2 rounded mb-4">
Signup
</button>

        <p className="text-center mb-4">
          Already have an account? <Link to="/login">Login</Link>
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

export default Signup;