import { useRef, useState, useEffect } from 'react'
import styled from '@emotion/styled'

import { generateId } from '../function'
import { useLocalStorage } from '../hook'
import { useSelector } from 'react-redux'

export default function DrawingBoard() {
  const { color, strokeWidth } = useSelector((store) => store.draw)
  console.log(color)
  const svgRef = useRef()
  const [isDrawing, setIsDrawing] = useState(false)
  const [id, setId] = useState('')
  const [lines, setLines] = useLocalStorage('lines', [])

  const handleMouseDown = (e) => {
    handleStartDrawing(e.clientX, e.clientY)
  }

  const handleTouchStart = (e) => {
    handleStartDrawing(e.touches[0].clientX, e.touches[0].clientY)
  }

  const handleStartDrawing = (x, y) => {
    const id = generateId(10)
    const svgRect = svgRef.current.getBoundingClientRect()
    const startingPoint = {
      x: x - svgRect.x,
      y: y - svgRect.y,
    }
    setIsDrawing(true)
    setId(id)
    setLines((lines) =>
      lines.concat({
        id,
        points: [startingPoint],
      })
    )
  }

  const handleMouseMove = (e) => {
    handleMoving(e.clientX, e.clientY)
  }

  const handleTouchMove = (e) => {
    handleMoving(e.touches[0].clientX, e.touches[0].clientY)
  }

  const handleMoving = (x, y) => {
    if (!isDrawing) {
      return
    }
    const svgRect = svgRef.current.getBoundingClientRect()

    setLines((lines) =>
      lines.map((line) =>
        line.id === id
          ? {
              ...line,
              points: line.points.concat({
                x: Math.floor(x - svgRect.x),
                y: Math.floor(y - svgRect.y),
              }),
            }
          : line
      )
    )
  }
  // console.log(lines[lines.length - 1].points)

  const handleStopDrawing = () => {
    setIsDrawing(false)
  }

  // For demo purspose
  useEffect(() => {
    const svgEle = svgRef.current
    if (!svgEle) {
      return
    }
    const { height, width } = svgEle.getBoundingClientRect()
    svgEle.setAttribute('width', width)
    svgEle.setAttribute('viewBox', `0 0 ${width} ${height}`)
  })

  return (
    <Wrapper
      ref={svgRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleStopDrawing}
      onMouseLeave={handleStopDrawing}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleStopDrawing}
      style={{
        touchAction: 'none',
      }}
    >
      {lines.map(({ id, points }) => (
        <polyline
          key={id}
          fill='none'
          stroke={color}
          strokeWidth={strokeWidth}
          points={points.map((point) => `${point.x},${point.y}`).join(' ')}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled('svg')(() => ({
  cursor: 'crosshair',
  width: '100%',
  height: '100%',
}))
