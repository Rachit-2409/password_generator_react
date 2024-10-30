import { useCallback, useEffect, useState } from 'react'
import './App.css'
function App() {
const [length, setlength] = useState(8);
const [char_Allowed, setchar_Allowed] = useState(false);
const [number_Allowed, setnumber_Allowed] = useState(false);
const [Password, setpassword] = useState('');


let password_generator = useCallback(()=>{
let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let digit = '123456789';
let special_character = "`~!@#$%^&*()_+-={}[]<>";
let pass = "";

console.log(length)

if(char_Allowed) character+= special_character;
if(number_Allowed) character+= digit;


for(let i =0; i<length; i++){
  let random_value = Math.floor(Math.random()*character.length)
  pass = pass + character.charAt(random_value)
}
setpassword(pass)

},
[length, char_Allowed, number_Allowed, setpassword]);
  
let copyText = ()=>{
  navigator.clipboard.writeText(Password)
}


useEffect(()=>{
  password_generator()
},[length, number_Allowed, char_Allowed, setpassword])




return (

  <>
  <div className='container'>
    <div className='content'>
        <input type="text" id='Password' placeholder='Password' value={Password} readOnly />
        <div>
        <button style={{background:"green", color:"white"}} onClick={()=>{password_generator()}}>Generate Password</button>
        <button onClick={copyText}>Copy</button>
        <button style={{background : "red", color:"white"}} onClick={()=>{setpassword("")}}>Clear</button>
       
        </div>
        
        <div>
          <label htmlFor="range"> Password Length : </label>
          <input type="range" min={8} max={50}  id='range' onChange={(element)=>{setlength(element.target.value)}}/>
          <span>{length}</span>
        </div>
        <div>

            <label htmlFor="characters">Characters : </label>
            <input type="checkbox" id="characters" onClick={()=>{setchar_Allowed(!char_Allowed)}}/>

            <label htmlFor="numbers">Numbers : </label>
            <input type="checkbox" id="numbers" onClick={()=>{setnumber_Allowed(!number_Allowed)}}/>

        </div>
    </div>
  </div>
  
  </>
)
}

export default App
