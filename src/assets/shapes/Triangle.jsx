import { useSelector } from 'react-redux'

export default function Triangle() {
  const { shapeColor } = useSelector((store) => store.draw)

  return (
    <svg>
      <path
        fill={shapeColor}
        d='M68.787 17.721c1.324-2.295 5.102-2.295 6.426 0l56.403 97.771c1.195 2.071-.542 4.508-3.213 4.508H15.597c-2.67 0-4.408-2.437-3.213-4.508l56.403-97.77z'
      ></path>
    </svg>
  )
}
