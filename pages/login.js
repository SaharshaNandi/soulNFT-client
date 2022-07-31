<meta name="viewport" content="width=device-width" initial-scale="1.00" maximum-scale="1.0" />
import styles from "../styles/Login.module.css";
import Header from "../components/Header";
import { useState } from "react";
import { useRouter } from 'next/router'

function Login() {
    const Router = useRouter()
    const[UserID, setID] = useState('')
    const[Password,setPassword] = useState('')
    const[Show, setShow] = useState(false)
    const[data, setData] = useState([
        {
          id : 'kakashi',
          name : 'Risha',
          e_mail : 'hatake@mail.com',
          password : 'oproy'
        },
        {
          id : 'roy',
          name : 'Archi',
          e_mail : 'roy@gmail.com',
          password : 'marcelom12',
        },
        {
          id : 'kar',
          name : 'Naba',
          e_mail : 'nothing@mail.com',
          password : 'God',
        }
      ])
    
      const checkAuth = (id,password) => {
        const userCheck = data.find((user)=>
        ((user.id === id || user.e_mail===id) && user.password === password))
        return userCheck
      }

      const onSubmit=(e)=>{
        e.preventDefault()
        console.log({UserID, Password})
    
        if(!UserID || !Password){
          alert('Fill in the fields correctly')
          return
        }
    
        if(checkAuth(UserID,Password)){
          Router.push('/Homepage')
        } else {
          alert('ID or Password incorrect')
        }
    
        setID('')
        setPassword('')
      }

      
  return (
    <div className={styles.container2}>
        <div className={styles.container}>
      <Header />
      <form className={styles.login} onSubmit={onSubmit}>
        <div className={styles.login_control}>
        <label>User ID</label>
            <input type='text' placeholder='Enter your Username or Email'
            value={UserID} onChange={(e)=>setID(e.target.value)}/>
        </div>
        <div className={styles.login_control}>
          <label>Password</label>
            <input type={Show? 'text':'password'} placeholder='Enter your Password'
            value={Password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <input type='submit' value='Login' 
      className={styles.btn}/> 
      <div className={styles.login_control_check}><input type='checkbox'
      value = {Show} onChange={(e)=>setShow(!Show)}/>
      <label>Show Password</label>
      </div>
    </form>  
    </div>
    </div>
  )
}

export default Login