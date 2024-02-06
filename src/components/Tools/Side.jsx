import React from 'react'
import styled from '@emotion/styled'

export default function Side() {
  return <Wrapper>Side</Wrapper>
}

const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '1rem',
  borderRight: '1px solid var(--bg-border)',
}))
