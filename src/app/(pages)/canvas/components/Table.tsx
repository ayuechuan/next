'use client'

import { useParams } from "next/navigation";
import { useState } from "react";

export default function TableCP() {
  const params = useParams();
  // const pathname = usePathname();
  const [posts, setPosts] = useState(1);
  console.log('props======>>>>>>>',params);
  return (
    <div>
      {posts}
      <button onClick={()=>{setPosts(posts + 1)}}>添加</button>
    </div>
  )
}