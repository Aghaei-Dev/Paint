import { useSelector } from 'react-redux'

export default function Circle() {
  const { shapeColor } = useSelector((store) => store.draw)

  return (
    <svg height='40' width='40' xmlns='http://www.w3.org/2000/svg'>
      <circle r='20' cx='20' cy='20' fill={shapeColor} />
    </svg>
  )
}
