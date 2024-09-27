import TableCP from "../components/Table"

export default function Canvas(props: {
  params:{slug : string[]}
}) {
  console.log('props', props)
  return <div>
    12122 ={props?.params?.slug}
    <TableCP />
  </div>
}