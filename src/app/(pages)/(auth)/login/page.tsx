'use client'
import { useMount } from "ahooks";
import { Metadata } from "next"
import { useEffect, useRef } from "react"
import { FormilyIance } from "./slot";

export default function Login() {

  const ref = useRef<BroadcastChannel>();

  useMount(() => {
    fetch('/api/auth')
      .then(res => res.json())
      .then(data => console.log(data));


      ref.current = new BroadcastChannel('smartsheet');
      ref.current.onmessage = (event) => {
        console.log('event',event);
  
      };
      ref.current!.postMessage({
        type : 'login'
      })
  })
  

  return <div>
    login
    <button onClick={()=>{
       ref.current!.postMessage({
         type : 'login'
       })
    }}>发送</button>
    <FormilyIance />
    </div>
}