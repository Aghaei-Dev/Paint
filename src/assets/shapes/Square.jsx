import { useSelector } from 'react-redux'

export default function Square() {
  const { shapeColor } = useSelector((store) => store.draw)

  return (
    <svg>
      <rect
        x='16'
        y='16'
        width='112'
        height='112'
        fill={shapeColor}
        rx='3.23077'
      ></rect>
    </svg>
  )
}
