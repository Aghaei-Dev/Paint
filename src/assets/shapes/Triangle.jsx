import { useSelector } from 'react-redux'

export default function Triangle() {
  const { shapeColor } = useSelector((store) => store.draw)

  return (
    <svg
      fill='hsl(0, 100%, 50%)'
      width='40px'
      height='40px'
      viewBox='0 0 250 250'
      id='Flat'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path d='M236.77344,211.97656a23.75471,23.75471,0,0,1-20.79688,12.01563H40.02344a23.9925,23.9925,0,0,1-20.76563-36.02344L107.23437,35.97656h-.00781a24.00413,24.00413,0,0,1,41.54688,0l87.96875,151.99219A23.744,23.744,0,0,1,236.77344,211.97656Z'></path>{' '}
      </g>
    </svg>
  )
}
