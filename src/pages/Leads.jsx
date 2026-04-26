import { useState } from "react";

function Leads() {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [message,setMessage] = useState("");
const [leads,setLeads] = useState([]);

const handleSubmit = (e)=>{
 e.preventDefault();

 const newLead = {
  name:name,
  email:email,
  message:message
 };

 setLeads([...leads,newLead]);

 setName("");
 setEmail("");
 setMessage("");
};

return(

<div style={{padding:"30px",maxWidth:"600px"}}>

<h2>Lead Form</h2>

<form
onSubmit={handleSubmit}
style={{
display:"flex",
flexDirection:"column",
gap:"15px"
}}
>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={{padding:"10px"}}
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={{padding:"10px"}}
/>

<textarea
placeholder="Message"
value={message}
onChange={(e)=>setMessage(e.target.value)}
style={{padding:"10px"}}
/>

<button
type="submit"
style={{
background:"#1e90ff",
color:"white",
padding:"12px",
border:"none",
borderRadius:"5px"
}}
>
Submit
</button>

</form>

<h3 style={{marginTop:"40px"}}>All Leads</h3>

{leads.map((lead,index)=>(
<div key={index} style={{
border:"1px solid #ddd",
padding:"10px",
marginTop:"10px",
borderRadius:"5px"
}}>
<p><b>Name:</b> {lead.name}</p>
<p><b>Email:</b> {lead.email}</p>
<p><b>Message:</b> {lead.message}</p>
</div>
))}

</div>

);

}

export default Leads;