import React from 'react'
import styled from '@emotion/styled'
import { dancingBarsNumber } from '../../assets/constants'
import { ControlBtn } from '../'
import { Next, Pause, Play } from '../../assets/icons'
import { useDispatch as UseDispatch, useSelector } from 'react-redux'
import {
  changeMusicNumber,
  changeMusicPlaying,
} from '../../features/global/globalSlice'
import { musicAndCoverArray } from '../../assets/constants'

export default function MusicPlayer() {
  const { isMusicPlaying, musicNumber } = useSelector((store) => store.global)
  const dispatch = UseDispatch()
  const toggleMusicPlayer = () => {
    dispatch(changeMusicPlaying())
  }
  const changeMusic = () => {
    dispatch(changeMusicNumber())
  }

  return (
    <Wrapper>
      <div className='control_img'>
        <button onClick={changeMusic}>
          <img
            src={musicAndCoverArray[musicNumber].cover}
            alt={musicAndCoverArray[musicNumber].id}
          />
          <Next />
        </button>
        {isMusicPlaying && (
          <audio src={musicAndCoverArray[musicNumber].file} autoPlay />
        )}

        <ControlBtn
          onIcon={<Play />}
          offIcon={<Pause />}
          active={isMusicPlaying}
          onChange={toggleMusicPlayer}
        />
      </div>
      <PlayingBars active={isMusicPlaying} />
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  borderTop: '1px solid var(--grey-400)',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',

  paddingTop: '1rem ',
  '.control_img': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem',
    width: '100%',
    button: {
      position: 'relative',
      '.icon': {
        background: 'var(--grey-300)',
        position: 'absolute',
        padding: '0.5rem',
        borderRadius: '50%',
        visibility: 'hidden',
        cursor: 'pointer',
        fill: ' var(--grey-500)',
        transition: '0.3s background , .3s fill',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        fill: 'var(--grey-500)',
        ':hover': {
          background: ' var(--grey-400)',
          fill: 'var(--grey-600)',
        },
      },
      ':hover': {
        img: {
          filter: 'blur(1px) ',
        },
        '.icon': {
          visibility: 'visible',
        },
      },
      img: {
        borderRadius: 'var(--radius)',
        width: '100px',
        height: '100px',
        // ':hover': {
        //   filter: 'grayscale(10)',
        // },
      },
    },
  },
}))

function PlayingBars({ active }) {
  return (
    <PlayBarsWrapper active={active}>
      {Array(dancingBarsNumber)
        .fill(Math.random())
        .map((item, index) => {
          return (
            <Bar
              key={index}
              height={Math.random() * item}
              delay={Math.random()}
              className={active ? '' : 'stop'}
            />
          )
        })}
    </PlayBarsWrapper>
  )
}
const PlayBarsWrapper = styled('div')(({ active }) => ({
  width: '100%',
  height: active ? '100px' : '0',
  marginTop: active ? '1rem' : '0',
  display: 'flex',
  justifyContent: 'start',
  alignItems: ' flex-end',
  gap: '1px',
  transition: '.5s all',
  '.stop': {
    animation: ' up-to-down .5s ease 1 alternate',
    height: '0',
  },
  '@keyframes up-and-down ': {
    '10%': {
      height: '30%',
    },
    '30%': {
      height: '100%',
    },
    '60%': {
      height: '50%',
    },
    '80%': {
      height: '75%',
    },
    '100% ': {
      height: '60%',
    },
  },
  '@keyframes up-to-down ': {
    '0%': {
      height: '60%',
    },
    '50%': {
      height: '90%',
    },
    '100% ': {
      height: '0%',
    },
  },
}))

const Bar = styled('span')(({ height, delay }) => ({
  background: 'var(--grey-400)',
  width: '30%',
  height: `${height}%`,
  animation: ' up-and-down 1.3s ease infinite alternate',
  animationDelay: `${delay}s`,
}))
