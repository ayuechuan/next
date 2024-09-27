export default function BlogPostPageID({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>
}