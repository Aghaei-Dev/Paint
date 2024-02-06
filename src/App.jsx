import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { DrawingBoard, TopTool, CenterTool } from './components'
import { darkModeHandler } from './function'
export default function App() {
  const { isDarkMode } = useSelector((store) => store.global)

  useEffect(() => {
    darkModeHandler(isDarkMode, 'darkMode')
  }, [isDarkMode])
  return (
    <Wrapper>
      <TopTool />
      <CenterTool />
      <DrawingBoard />
    </Wrapper>
  )
}

const Wrapper = styled('section')(() => ({
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
}))
