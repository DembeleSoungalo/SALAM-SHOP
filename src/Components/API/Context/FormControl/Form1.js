import React,{useState} from 'react'

 const Form1 = () => {
    const [userName, setUserName] = useState('Cecon.kita')
    const [password, setPassword] = useState('123456789')
    const hanleSubmit = (e)=>{
      
        e.preventDefault();
        console.log(e);
        setUserName('')
        setPassword('')
        
    }

  return (
    <div>
        <form onSubmit={hanleSubmit}>
        <label>UserName</label>
        <input type='text' id='nom' value={userName} onChange={(e)=>setUserName(e.target.value) } ></input>
        <br/>
        <br/>
        <label>Password</label>
        <input type='password' id='pass' value={password} onChange={(e)=>setPassword(e.target.value) } ></input>
        <br/>
        <br/>
        <button>Se Contecter</button>

        </form>
    </div>
  )
}
export default Form1
