import React ,{useState,useEffect} from 'react'
import { apiProfileLookup } from './lookup'

export function ProfileComponent(props){
    const [address,setAddress]=useState()
    const [mobilenumber,setMobileNumber]=useState()
    const [isLoading,setIsLoading]=useState(true)

    let data={"address":address,"mobilenumber":mobilenumber}
    const handleProfileLookup=(response,status)=>{
        console.log("Profile ",response,status)
        if(status===200){
            setAddress(response.address)
            setMobileNumber(response.mobilenumber)
            setIsLoading(false)
        }
        else{
            alert("Profile Error")
        }
        // console.log("Profile ",address,mobilenumber)
    }

    useEffect(()=>{
        apiProfileLookup(handleProfileLookup)
        data={"address":address,"mobilenumber":mobilenumber}
    },[])

    const handleOnChange=(event)=>{
        let name=event.target.name
        if(name==="address"){
            setAddress(event.target.value)
            event.target.className="form-control"
        }
        else if(name==="mobilenumber"){
            setMobileNumber(event.target.value)
            event.target.className="form-control"
        }
    }
    // console.log("Data ",data)
    const saveChanges=()=>{
        apiProfileLookup(handleProfileLookup,data)
    }

    return isLoading===true ? "Loading" : <div>
        <h1>Profile</h1>
        <label for="address">Address</label>
        <input type="text" class="form-control text-muted" id="address" value={address} onChange={handleOnChange} name="address"></input>

        <label for="mobilenumber">Mobile Number</label>
        <input type="number" class="form-control text-muted" id="mobilenumber" value={mobilenumber} onChange={handleOnChange} name="mobilenumber"></input>
        <button className="btn btn-secondary" onClick={saveChanges}>Save</button>
    </div>
}