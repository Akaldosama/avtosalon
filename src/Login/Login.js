import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const moveUsers = () =>{
        if(phone === "993331117" && password === "1234"){
            navigate('/Carpage')
        }else{
            alert('Xato')
        }
    }

    const phoneFunc = (e) =>{
        setPhone(e.target.value)
    }
    const passwordFunc = (e) =>{
        setPassword(e.target.value)
    }

  return (
    <div className='container mt-5'>
        <div className="card">
            <div className="card-header text-center fw-bold fs-4">
                Login
            </div>
            <div className="card-body">
                <form>
                    <input type="text" className='form-control' placeholder='Phone' onChange={phoneFunc}/>
                    <input type="text" className='form-control mt-3' placeholder='Password' onChange={passwordFunc} />
                    <button className='btn btn-primary mt-3' onClick={moveUsers}>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}
