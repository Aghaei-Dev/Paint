import styled from '@emotion/styled'
import { ArrowRight, ArrowLeft } from '../../assets/icons'
import { MusicPlayer, Timer, Toggle, Tooltip } from '../'
import { useDispatch, useSelector } from 'react-redux'
import { changeAdditionalModal } from '../../features/global/globalSlice'

export default function Top() {
  const { isAdditionalModal } = useSelector((store) => store.global)
  const dispatch = useDispatch()

  const toggleAdditionalModal = () => {
    dispatch(changeAdditionalModal())
  }
  const styles = {
    isAdditionalModal,
  }
  return (
    <Wrapper>
      <div className='one'>
        <button onClick={toggleAdditionalModal}>show AdditionalModal</button>
        <Timer_MusicWrapper styles={styles}>
          <Timer />
          <MusicPlayer />
        </Timer_MusicWrapper>
        <Tooltip title='Ctrl + Z' placement='bottom'>
          <ArrowLeft />
        </Tooltip>

        <Tooltip title='Ctrl + Y' placement='bottom'>
          <ArrowRight />
        </Tooltip>
      </div>
      <Toggle />
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid var(--grey-300)',
  padding: '.2rem .6rem',
  position: 'relative',
  '.one': {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '1rem',
  },
  svg: {
    width: '25px',
    height: '25px',
    cursor: 'pointer',
  },
}))

const Timer_MusicWrapper = styled('div')(
  ({ styles: { isAdditionalModal } }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    background: 'var(--white-1000)',
    display: !isAdditionalModal && 'none',
    position: 'absolute',
    bottom: '0',
    transform: 'translate(0%,100%)',
    borderBottomLeftRadius: 'var(--radius)',
    borderBottomRightRadius: 'var(--radius)',
    padding: '1rem ',
    border: '1px solid var(--black-300)',
  })
)
