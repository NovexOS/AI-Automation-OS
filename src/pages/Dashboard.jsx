import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Dashboard() {
  const [totalLeads, setTotalLeads] = useState(0)
  const [data, setData] = useState([]);

  const [totalConversations, setTotalConversations] = useState(0)
  const [totalRevenue, setTotalRevenue] = useState(0)

useEffect(() => {
  fetchLeads();
  fetchConversations();
  fetchRevenue();
}, []);

async function fetchLeads() {
  const { data: leads, error } = await supabase
    .from("leads")
    .select("*");

    if (error) {
      console.log("Supabase Error:", error);
      return;
    }

  if (leads) {
    setTotalLeads(leads.length)
    const formatted = leads.map((lead, index) => ({
      name: lead.name,
      leads: index + 1
    }));

    setData(formatted);
  }

}

  async function fetchConversations(){

 const { data, error } = await supabase
 .from("conversations")
 .select("*")

 if(data){
  setTotalConversations(data.length)
 }
  }

async function fetchRevenue(){

 const { data, error } = await supabase
 .from("revenue")
 .select("*")

 if(data){

 const total = data.reduce((sum,item)=> sum + item.amount,0)

 setTotalRevenue(total)

 }


}
  return (
    <div>

    <div className="flex-1 p-6">

      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
     
      {/* Cards */}

     <div className="grid grid-cols-3 gap-4 mb-8">

<div className="bg-white shadow p-4 rounded-lg">
<p className="text-gray-500">Total Leads</p>
<h2 className="text-2xl font-bold">{totalLeads}</h2>
</div>

<div className="bg-white shadow p-4 rounded-lg">
<p className="text-gray-500">AI Conversations</p>
<h2 className="text-2xl font-bold">{totalConversations}</h2>
</div>

<div className="bg-white shadow p-4 rounded-lg">
<p className="text-gray-500">Revenue</p>
<h2 className="text-2xl font-bold">₹{totalRevenue.toLocaleString("en-IN")}
</h2>
</div>

</div>

      {/* Chart */}
      <div className="bg-white shadow p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Leads This Week</h2>

<LineChart width={700} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
<Line type="monotone" dataKey="leads" stroke="#3b82f6" strokeWidth={3} dot />
        </LineChart>

      </div>

{/* Activity Section */}

<div className="bg-white shadow p-4 rounded-lg mt-6">
  <h2 className="text-lg font-bold mb-4">Recent Activity</h2>

  <ul className="space-y-2 text-gray-600">
    <li>New lead added from website</li>
    <li>AI chatbot conversation completed</li>
    <li>Lead converted to customer</li>
    <li>New automation workflow triggered</li>
  </ul>
</div>

</div>
    </div>
  );
}
