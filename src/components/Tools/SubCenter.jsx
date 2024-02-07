import React from 'react'
import styled from '@emotion/styled'

export default function SubCenter() {
  return <Wrapper>SubCenter</Wrapper>
}

const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '.3rem',
  position: 'absolute',
  background: 'var(--white-1000)',
  top: '-30%',
  left: '50%',
  transform: 'translate(-50%,-41%)',
  height: '40px',
  width: '69%',
  borderTopLeftRadius: '13px',
  borderTopRightRadius: '13px',
  boxShadow: ' 0 0 0 0.5px var(--black-300)',
}))
