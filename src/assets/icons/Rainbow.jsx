import React from 'react'

export default function Rainbow() {
  return (
    <svg
      width='40px'
      height='40px'
      viewBox='160 10 500 550'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      xmlSpace='preserve'
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 1.5,
      }}
    >
      <circle
        id='red'
        cx='410.846'
        cy='288.529'
        r='177.059'
        style={{ fill: 'none', stroke: 'rgb(225,46,16)', strokeWidth: '25px' }}
      />
      <ellipse
        id='orange'
        cx='410.846'
        cy='288.529'
        rx='144.501'
        ry='145.044'
        style={{ fill: 'none', stroke: 'rgb(225,126,16)', strokeWidth: '25px' }}
      />
      <ellipse
        id='yellow'
        cx='410.846'
        cy='288.529'
        rx='118.091'
        ry='118.142'
        style={{ fill: 'none', stroke: 'rgb(255,224,46)', strokeWidth: '25px' }}
      />
      <ellipse
        id='green'
        cx='410.846'
        cy='288.529'
        rx='90.069'
        ry='90.843'
        style={{ fill: 'none', stroke: 'rgb(52,126,25)', strokeWidth: '25px' }}
      />
      <ellipse
        id='blue'
        cx='410.846'
        cy='288.529'
        rx='62.43'
        ry='62.044'
        style={{ fill: 'none', stroke: 'rgb(0,42,175)', strokeWidth: '25px' }}
      />
      <ellipse
        id='purple'
        cx='410.952'
        cy='287.889'
        rx='34.322'
        ry='34.662'
        style={{ fill: 'none', stroke: 'rgb(127,0,175)', strokeWidth: '25px' }}
      />
    </svg>
  )
}
