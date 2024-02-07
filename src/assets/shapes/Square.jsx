import { useSelector } from 'react-redux'

export default function Square() {
  const { shapeColor } = useSelector((store) => store.draw)

  return (
    <svg width='50' height='50' xmlns='http://www.w3.org/2000/svg'>
      <rect width='50' height='50' x='20' y='20' fill={shapeColor} />
    </svg>
  )
}
