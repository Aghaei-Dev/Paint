import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Play, Pause } from '../../assets/icons'
import { ControlBtn, Tooltip } from '../'
import { useSelector, useDispatch } from 'react-redux'
import { changeTimerCount } from '../../features/global/globalSlice'

export default function Timer() {
  const dispatch = useDispatch()
  const { isTimerCount } = useSelector((store) => store.global)
  const [second, setSecond] = useState('00')
  const [minute, setMinute] = useState('00')
  const [counter, setCounter] = useState(0)

  const toggleTimerHandler = () => {
    dispatch(changeTimerCount())
  }
  useEffect(() => {
    let intervalId
    if (isTimerCount) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60
        const minuteCounter = Math.floor(counter / 60)

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter

        setSecond(computedSecond)
        setMinute(computedMinute)

        setCounter((counter) => counter + 1)
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [isTimerCount, counter])
  return (
    <Tooltip placement='right' title='HotKey : space'>
      <Wrapper>
        <p>
          {minute} : {second}
        </p>
        <ControlBtn
          offIcon={<Pause />}
          onIcon={<Play />}
          onChange={toggleTimerHandler}
          active={isTimerCount}
        />
      </Wrapper>
    </Tooltip>
  )
}

const Wrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  borderTop: '1px solid var(--grey-400)',
  padding: '1rem 0',
  p: {
    color: 'var(--text-300)',
    fontWeight: '700',
    cursor: 'pointer',
  },
}))
