import React from 'react'
import styled from '@emotion/styled'

export default function Center() {
  return <Wrapper>Center</Wrapper>
}

const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '1rem',
  border: '2px solid var(--grey-300)',
  position: 'fixed',
  background: 'red',
  bottom: '0',
  left: '50%',
  transform: 'translate(-50%,-20%)',
  width: '80%',
  borderRadius: '50px',
  padding: '1rem',
}))
