import React from 'react'
import ButtonBox from './ButtonBox'

const Boxquo = ({ramdomQuote,handleClickr,colorRandom}) => {
    
    return (
        
        <article style={{color:colorRandom}} className='box'>
            <i className='bx bxs-quote-alt-left'></i>
            <p className='box__text'> {ramdomQuote.quote} </p>
            <h2 className='box__author '> {ramdomQuote.author} </h2>
            <ButtonBox
                colorRandom={colorRandom}
                handleClickr={handleClickr}
            />
          

        </article>
    )
}

export default Boxquo