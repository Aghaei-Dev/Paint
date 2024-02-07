import { useSelector } from 'react-redux'

export default function Circle() {
  const { shapeColor } = useSelector((store) => store.draw)

  return (
    <svg>
      <circle cx='72' cy='72' r='64' fill={shapeColor}></circle>
    </svg>
  )
}
