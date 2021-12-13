import React, { useState } from 'react'
import { backEndLoginlookup } from '../lookup/loginLookup'
import { backEndRegisterlookup } from '../lookup/registerLookup'

export function LoginComponent(props){
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    // const {userLogin}=props
    // console.log(userLogin)
    let credentials={username:username,password:password}
    const handleLoginToken=(response,status)=>{
        if(status===400){
            alert("Wrong Credentials")
        }
        else if(status===200){
            console.log(response.token,status)
            // setToken(JSON.stringify(response.token))
            localStorage.setItem("token",`${response.token}`)
            window.location.href="/"
        }
    }
    const handleRegisterLogin=(response,status)=>{
        console.log("Register ",response,status)
        if(status===200){
            backEndLoginlookup(credentials,handleLoginToken)
            // window.location.href="/"
        }
        if(response.username[0]==="A user with that username already exists."){
            alert("User Already Exists")
        }

    }
    const login=(event)=>{
        // console.log(JSON.stringify(credentials))
        // fetch('http://127.0.0.1:8000/auth/',{
        //     method:'POST',
        //     headers:{'Content-Type':"application/json"},
        //     body:JSON.stringify(credentials)
        // }).then(data=>data.json()).then(
        //     data=>{
        //         console.log(data)
        //         // userLogin(data.token)
        //     }
        // ).catch(error=>console.log(error))
        backEndLoginlookup(credentials,handleLoginToken)
    }
    const register=(event)=>{
        // console.log(JSON.stringify(credentials))
        // fetch('http://127.0.0.1:8000/api/books/users',{
        //     method:'POST',
        //     headers:{'Content-Type':"application/json"},
        //     body:JSON.stringify(credentials)
        // }).then(data=>data.json()).then(
        //     data=>{
        //         // console.log(data.token)
        //         // userLogin(data.token)
        //         console.log(data)

        //     }
        // ).catch(error=>console.log(error))
        backEndRegisterlookup(credentials,handleRegisterLogin)
    }
    const inputChanged=(event)=>{
        let targetname=event.target.name
        targetname==="username" ? setUsername(event.target.value) : setPassword(event.target.value)
        // console.log(credentials)
    }
    return <div>
        <h1>Login Here </h1>
                <div>For sample login use credentials<br></br>Username: dhruvilmehta Password: 1234<br></br>
                OR <br></br>You can enter your credentials and click on Register</div>
                <br></br>
                <label for="exampleInputEmail1">Username</label>
                <input type="text" class="form-control " placeholder="Username" name="username" value={credentials.username} onChange={inputChanged} />
          
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control " placeholder="Password" name="password" value={credentials.password} onChange={inputChanged} />

            <button onClick={login} className="btn btn-primary">Login</button>
            <button onClick={register} className="btn btn-secondary" >Register</button>
        {/* <label>
            Username :
            <input type="text" name="username" value={credentials.username} onChange={inputChanged}></input>
        </label>
        <label>
            Password :
            <input type="password" name="password" value={credentials.password} onChange={inputChanged}></input>
        </label>
        <button onClick={login} className="btn btn-primary">Login</button>
        <button onClick={register} className="btn btn-secondary" >Register</button> */}
    </div>
}

export function LoginParentComponent(props){
    const [token,setToken]=useState('')
    const userLogin=(token)=>{
        console.log(token)
        setToken(token)
    }
    return <LoginComponent userLogin={userLogin} />
}