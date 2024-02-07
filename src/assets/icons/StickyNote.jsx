import { useSelector } from 'react-redux'

export default function StickyNote() {
  const { stickyColor } = useSelector((store) => store.draw)

  return (
    <svg
      width='104'
      height='104'
      viewBox='-20 -20 104 104'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <path
          d='M0.459717 0.680176L104.46 0.680243V104.68H0.459717V2.09514V0.680176Z'
          fill={stickyColor}
          style={{ clipPath: 'url("#stickyMaskV3-1")' }}
        ></path>
        <g>
          <mask
            id='stickyCurlMaskV3-1'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='84'
            height='84'
            style={{ maskType: 'alpha' }}
          >
            <path
              d='M31.9819 3.8766C34.7398 1.38156 38.3262 7.51147e-07 42.0452 2.10768e-06L104 2.47061e-05V104H3.61353e-05L3.37915e-06 39.4677C1.22757e-06 35.2289 1.7934 31.188 4.9367 28.3443L31.9819 3.8766Z'
              fill='white'
            ></path>
          </mask>
          <g mask='url(#stickyCurlMaskV3-1)'>
            <path
              d='M104 6.74129e-05L54.8928 48.5492L0 104V0L104 6.74129e-05Z'
              fill={stickyColor}
            ></path>
            <g filter='url(#stickyCurlBlurFilter)'>
              <rect
                x='-26'
                y='50.6831'
                width='96.831'
                height='16.7797'
                transform='rotate(-41.9127 -26 50.6831)'
                fill='black'
                fillOpacity='0.3'
              ></rect>
            </g>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M31.526 4.26953L3.2583 29.8513C10.3683 23.4168 26.3782 24.6229 26.3782 24.6229C26.3782 24.6229 25.0586 10.1224 31.526 4.26953Z'
              fill={stickyColor}
            ></path>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M31.5262 4.26953L3.25854 29.8513C10.3686 23.4168 26.3784 24.6229 26.3784 24.6229C26.3784 24.6229 25.0588 10.1224 31.5262 4.26953Z'
              fill='url(#paint0_linear_221_5067)'
            ></path>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id='stickyMaskV3-1'>
          <path
            d='M50.9701 6.74129e-05L104.97 0V104H0.970459V46.9909L50.9701 6.74129e-05Z'
            fill='#C20000'
          ></path>
          <path
            d='M32.2236 3.8766C34.9815 1.38156 38.5679 7.51147e-07 42.2869 2.10768e-06L104.242 2.47061e-05V104H0.241735L0.241703 39.4677C0.2417 35.2289 2.0351 31.188 5.1784 28.3443L32.2236 3.8766Z'
            fill='#2400FF'
          ></path>
          <rect x='250' y='520' width='1' height='1'></rect>
        </clipPath>
        <filter
          xmlns='http://www.w3.org/2000/svg'
          id='sticky_shadow-1'
          x='0'
          y='0'
          width='200%'
          height='200%'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation='1.5'></feGaussianBlur>
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
          ></feColorMatrix>
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_276_2240'
          ></feBlend>
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation='4'></feGaussianBlur>
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0'
          ></feColorMatrix>
          <feBlend
            mode='normal'
            in2='effect1_dropShadow_276_2240'
            result='effect2_dropShadow_276_2240'
          ></feBlend>
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect2_dropShadow_276_2240'
            result='shape'
          ></feBlend>
        </filter>
        <filter
          id='stickyCurlBlurFilter'
          x='-58'
          y='-45.9995'
          width='147.267'
          height='141.169'
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
            stdDeviation='16'
            result='effect1_foregroundBlur_221_5067'
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id='paint0_linear_221_5067'
          x1='18.1477'
          y1='15.5989'
          x2='25.7005'
          y2='25.3824'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='white' stopOpacity='0.5'></stop>
          <stop offset='0.319642' stopColor='white' stopOpacity='0.2'></stop>
          <stop offset='1' stopColor='white' stopOpacity='0.2'></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}
