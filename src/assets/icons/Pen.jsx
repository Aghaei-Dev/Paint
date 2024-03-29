import { useSelector } from 'react-redux'

export default function Pen() {
  const { color } = useSelector((store) => store.draw)

  return (
    <svg
      className='pen'
      width='48'
      height='80'
      viewBox='20 0 48 80'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_5757_63520)'>
        <g filter='url(#filter0_i_5757_63520)'>
          <path
            d='M39.3445 33C37.3713 33 35.6436 34.3242 35.1308 36.2296L21.338 85.3986C20.4502 88.5634 20.0001 91.8349 20.0001 95.1218L20 136H68V95.1388C68 91.8408 67.5468 88.5585 66.6532 85.384L52.8339 36.2922C52.3435 34.356 50.6011 33 48.6038 33H39.3445Z'
            fill='white'
          ></path>
          <path
            d='M39.3445 33C37.3713 33 35.6436 34.3242 35.1308 36.2296L21.338 85.3986C20.4502 88.5634 20.0001 91.8349 20.0001 95.1218L20 136H68V95.1388C68 91.8408 67.5468 88.5585 66.6532 85.384L52.8339 36.2922C52.3435 34.356 50.6011 33 48.6038 33H39.3445Z'
            fill='url(#paint0_linear_5757_63520)'
          ></path>
        </g>
        <g opacity='0.36' filter='url(#filter1_f_5757_63520)'>
          <rect x='39' y='34' width='12' height='102' fill={color}></rect>
        </g>
        <path
          d='M39.3445 33C37.3713 33 35.6436 34.3242 35.1308 36.2296L21.338 85.3986C20.4502 88.5634 20.0001 91.8349 20.0001 95.1218L20 136H68V95.1388C68 91.8408 67.5468 88.5585 66.6532 85.384L52.8339 36.2922C52.3435 34.356 50.6011 33 48.6038 33H39.3445Z'
          fill='white'
          fillOpacity='0.3'
        ></path>
        <path
          d='M35.3715 36.2972L35.3716 36.2972L35.3722 36.2946C35.8557 34.4983 37.4844 33.25 39.3445 33.25H48.6038C50.4867 33.25 52.1292 34.5284 52.5915 36.3536L52.5915 36.3536L52.5932 36.3599L66.4125 85.4517C67.3 88.6042 67.75 91.8638 67.75 95.1388V135.75H20.25L20.2501 95.1218C20.2501 91.8577 20.6971 88.6089 21.5787 85.4661L35.3715 36.2972Z'
          stroke='black'
          strokeOpacity='0.3'
          strokeWidth='0.5'
        ></path>
        <path
          d='M42.5019 17.1186C42.6985 16.4551 43.308 16 44 16V16C44.692 16 45.3015 16.4551 45.4981 17.1186L50.5 34H37.5L42.5019 17.1186Z'
          fill={color}
        ></path>
        <path
          d='M45.2584 17.1896L50.1652 33.75H37.8348L42.7416 17.1896C42.9067 16.6323 43.4187 16.25 44 16.25C44.5813 16.25 45.0933 16.6323 45.2584 17.1896Z'
          stroke='black'
          strokeOpacity='0.3'
          strokeWidth='0.5'
        ></path>
      </g>
      <defs>
        <filter
          id='filter0_i_5757_63520'
          x='20'
          y='33'
          width='48'
          height='104.091'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          ></feBlend>
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          ></feColorMatrix>
          <feOffset dy='3.27273'></feOffset>
          <feGaussianBlur stdDeviation='0.545455'></feGaussianBlur>
          <feComposite
            in2='hardAlpha'
            operator='arithmetic'
            k2='-1'
            k3='1'
          ></feComposite>
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.54 0'
          ></feColorMatrix>
          <feBlend
            mode='normal'
            in2='shape'
            result='effect1_innerShadow_5757_63520'
          ></feBlend>
        </filter>
        <filter
          id='filter1_f_5757_63520'
          x='32'
          y='28'
          width='24'
          height='114'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          ></feBlend>
          <feGaussianBlur
            stdDeviation='3'
            result='effect1_foregroundBlur_5757_63520'
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id='paint0_linear_5757_63520'
          x1='20'
          y1='151'
          x2='67.9944'
          y2='150.483'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopOpacity='0.2'></stop>
          <stop
            offset='0.262579'
            stopColor='white'
            stopOpacity='0.0823736'
          ></stop>
          <stop offset='0.743368' stopColor='white' stopOpacity='0'></stop>
          <stop offset='1' stopOpacity='0.2'></stop>
        </linearGradient>
        <clipPath id='clip0_5757_63520'>
          <rect width='88' height='136' fill='white'></rect>
        </clipPath>
      </defs>
    </svg>
  )
}
