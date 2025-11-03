import React, { useState } from 'react'
import './styles.css'

const ExperienceForm = () => {
function submit() {
  fetch("http://localhost:5000/experiences", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ company, period, role, points }),
  })
    .then(res => res.json())
    .then(data => {
      console.log("Saved:", data);
      alert("Experience added successfully!");
    })
    .catch(err => console.error(err));
}

    const [company, setCompany] = useState("")
    const [period, setPeriod] = useState("")
    const [role, setRole] = useState("")
    const [points, setPoints] = useState("")
  return (
    <div className='exp-form'>
      <label>Company: </label>
      <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} />

      <label>Period: </label>
      <input type="text" value={period} onChange={(e)=>setPeriod(e.target.value)}/>

      <label>Role: </label>
      <input type="text" value={role} onChange={(e)=>setRole(e.target.value)}/>

      <label>Points: </label>
      <input type="text" value={points} onChange={(e)=>setPoints(e.target.value)}/>

      <button onClick={submit}>Submit</button>
    </div>
  )
}

export default ExperienceForm
