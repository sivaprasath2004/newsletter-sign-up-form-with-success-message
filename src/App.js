import React,{useState} from 'react'
import Check from './assets/images/icon-success.svg'
import Desktop from './assets/images/illustration-sign-up-desktop.svg'
import Mobile from './assets/images/illustration-sign-up-mobile.svg'
const App = () => {
  const [checker,setChecker]=useState({error:false,switched:false})
  function handleSubmit() {
    if(checker?.input){
      let check=checker.input.split('@').pop()
      if(check==="gmail.com"|| check==="outlook.com"){
        setChecker(pre=>({...pre,switched:true}))
      }
      else{
      setChecker(pre=>({...pre,error:true}))
      }
    }
    else{
      setChecker(pre=>({...pre,error:true}))
    }
  }
  return (
    <main>
      {
        !checker.switched? <>
        <div id="container1"> 
<div  id='heading'>
      <h1>Stay updated!</h1>
      <div id="additional_heading">
      <p>Join 60,000+ product managers receiving monthly</p>
      <p>updates on:</p>
      </div>
</div>
<div id="details">
<div>
  <img src={Check} alt="success" />
<p>Product discovery and building what matters</p>
</div>
<div>
<img src={Check} alt="success" />
<p>Measuring to ensure updates are a success</p>
</div>
<div>
<img src={Check} alt="success" />
<p>And much more!</p>
</div>
</div>
<div id='form'>
  <div>
<div id="alert_container">
<span>Email address</span>
{checker.error?
<span id="error">Valid email required</span>
:<></>
}
</div>
<input id={checker.error?"alert":""} type="email" placeholder="email@company.com" onChange={(e)=>setChecker(pre=>({...pre,input:e.target.value}))}/>
</div>
<button id={checker.error?"button_error":""} onClick={()=>handleSubmit()}>Subscribe to monthly newsletter</button>
</div>
</div>
<div id="container2">
  <img src={Desktop} alt="Desktop" id="Desktop" />
  <img src={Mobile} alt="Mobile" id="Mobile" />
  </div></>:
  <div id="Registered">
    <img src={Check} alt="success" />
    <h1>Thanks for subscribing!</h1>
  <p>
  A confirmation email has been sent to <span>{checker.input}</span>.
  Please open it and click the button inside to confirm your subscription.
</p>
  <button onClick={()=>setChecker(pre=>({...pre,switched:false,input:undefined,error:false}))}>Dismiss message</button>
    </div>
}
      </main>
  )
}

export default App