import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { email, z } from "zod"

const schema = z.object({
  name: z.string().min(1, "Name Is Required"),
  email: z.string().email("Invalid Email"),
  phone: z.string().regex(/^\d{10}$/, "Invalid Phone Number")
});
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({});
  function handleclick(e) {
    e.preventDefault();
    const result = schema.safeParse({ name, email, phone });
    console.log(result);
    if (result.success) {
      alert("Form Has Been Submitted");
      console.log(result.data);
    }
    else {
      const fielderror = {}
      result.error.issues.forEach((err) => {
        fielderror[err.path[0]] = err.message
      });
      setError(fielderror);
    }
  }

  return (
    <>
      <form onSubmit={handleclick} >
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
        <input type="number" placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
        {error.phone && <p style={{ color: 'red' }}>{error.phone}</p>}
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}


export default App
