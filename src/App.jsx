import React from 'react'
import styled from '@emotion/styled'
import { DrawingBoard, TopTool, SideTool } from './components'
export default function App() {
  return (
    <Wrapper>
      <TopTool />
      <SideTool />
      <DrawingBoard />
    </Wrapper>
  )
}

const Wrapper = styled('section')(() => ({
  display: 'grid',
  gridTemplateColumns: '70px 1fr',
  gridTemplateRows: '70px 1fr',
  height: '100dvh',
}))
