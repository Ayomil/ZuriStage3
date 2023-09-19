import React,{useEffect,useState} from "react";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthDetails = () => {
    const [Authuser,setAuthUser] = useState(null);
    useEffect(()=>{
        const listen = onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user);
            }else{
                setAuthUser(null);
            }
        });
        return() =>{
            listen();
        }
    },[])
  return (
    <div>{ Authuser ? <p>{`Account Created Using ${Authuser.email}`}</p> : <p>Signed Out</p>}</div>
  )
}
export default AuthDetails