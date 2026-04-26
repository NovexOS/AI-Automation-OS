import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold">
        AI Business Automation OS
      </h1>

      <p className="mt-4 text-lg">
        Automate your entire business with AI agents.
      </p>

      <Link to="/signup">
      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">
        Get Started
      </button>
      </Link>


      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="p-6 border rounded">
          <h2 className="text-xl font-semibold">AI CRM</h2>
          <p className="mt-2">Manage customers with AI powered CRM.</p>
        </div>

        <div className="p-6 border rounded">
          <h2 className="text-xl font-semibold">AI Chatbot</h2>
          <p className="mt-2">Automate customer support with AI chatbot.</p>
        </div>

        <div className="p-6 border rounded">
          <h2 className="text-xl font-semibold">Automation</h2>
          <p className="mt-2">Automate sales, marketing and workflows.</p>
        </div>

      </div>

    </div>
  )
}