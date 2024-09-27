'use client'

import { useEffect } from "react"

export default function Password() {
  useEffect(() => {
    const channel = new BroadcastChannel('smartsheet');
    channel.onmessage = (event) => {
      console.log('event',event);
      channel.postMessage({name : 123})
    };
  }, [])
  return <div>Password</div>
}