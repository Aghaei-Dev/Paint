import React from 'react'
import styled from '@emotion/styled'
export default function ControlBtn({ onIcon, offIcon, active, onChange }) {
  return (
    <Wrapper>
      <input type='checkbox' checked={active} onChange={onChange} />
      <span className='on'>{onIcon}</span>
      <span className='off'>{offIcon}</span>
    </Wrapper>
  )
}

const Wrapper = styled.label`
  background: var(--grey-300);
  padding: 0.5rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;
  fill: var(--grey-500);
  transition: 0.3s all;
  :hover {
    background: var(--grey-400);
    fill: var(--grey-600);
  }
  span {
    line-height: 0;
  }
  .on {
    animation: keyframes-fill 0.5s;
  }

  .off {
    display: none;
    animation: keyframes-fill 0.5s;
  }

  /* ------ On check event ------ */
  input:checked ~ .on {
    display: none;
  }

  input:checked ~ .off {
    display: block;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  @keyframes keyframes-fill {
    0% {
      transform: rotate(-180deg) scale(0);
      opacity: 0;
    }

    50% {
      transform: rotate(-10deg) scale(1.2);
    }
  }
`
