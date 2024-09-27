'use client'
import { ReactNode } from "react"
import { useRouter } from "next/navigation"

interface Props {
  children: ReactNode;
  ParallelOccupancy: ReactNode
}

export default function Layout(props: Props) {
  const router = useRouter();
  return (
    <div>
      <div>
        <button style={{
          border : '1px solid #ccc',
          width : 120,
          background : 'blue',
          color : '#fff'
        }} onClick={() =>{
          console.log('点了没反应');
          router.push(`/files/${parseInt(Math.random()*10 + '')}/item`)
          
        }}>item</button>
        <br/>
        <button style={{
          border : '1px solid #ccc',
          width : 120,
          background : 'blue',
          color : '#fff'
        }} onClick={() => router.push('/files/info')}>info</button>
       <br/>
       <br/>
        <button style={{
          border : '1px solid #ccc',
          width : 120,
          background : 'blue',
          color : '#fff'
        }} onClick={() => router.push('/login')}>login</button>
      
      </div>
      
      <div>
        {props.children}
        {props.ParallelOccupancy}
      </div>
    </div>
  )
}


