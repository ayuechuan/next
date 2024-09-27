'use client'

import { useParams } from "next/navigation";

function ItemPage() {
  const query = useParams();
  console.log('query',query);
  
  return (
    <div>
       <button>啦啦啦啦{query.id}</button>
    </div>
  )
}

export default ItemPage;

