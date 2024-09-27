'use client'
import { useRouter } from "next/navigation";

function Page() {
 const router = useRouter();
  return (
    <div>
      拦截 item 组件
      <button onClick={()=>router.back()}>X</button>
    </div>
  )
}


export default Page;

