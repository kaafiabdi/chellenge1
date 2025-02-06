import { useState } from "react"
export default function Guud(){
    let [iskudar1, iskudar2] = useState("")
    let [num1, setnum1] = useState(0)
    let [num2, setnum2] = useState(0)

   function Click(e){
   e.preventDefault()

   let qabasho1 = e.target.number1.value
   let qabasho2 = e.target.number2.value

   setnum1(Number(qabasho1))
   setnum2(Number(qabasho2))
   iskudar2(Number(qabasho1)*Number(qabasho2))

    
   }

    return(
      <form onSubmit={Click}>
        <input type="number"  id="number1" name="number1" placeholder="number1"/>
        <input type="number"  id="number2" name="number2" placeholder="number2"/>
        <h1>{iskudar1}</h1>
        <button type="submit">click</button>
      </form>
    )
  }