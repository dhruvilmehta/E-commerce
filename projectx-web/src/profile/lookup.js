import { backEndlookup } from "../lookup";

export function apiProfileLookup(callback,data){
    // console.log(request,"type")
    if(data){
        backEndlookup("POST","/profile/",callback,data)
    }
    else{
        backEndlookup("GET","/profile/",callback)
    }
}