import React from 'react'

const ButtonBox = ({colorRandom,handleClickr}) => {
  return (
    <button style={{background:colorRandom}} className='box__btn' onClick={handleClickr}>&#62;</button>
  )
}

export default ButtonBox