import React from 'react'

const Button = ({ styles, text }) => (
  <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-black text-[18px] outlined-none rounded-[10px] ${styles}`} >
    {text}
  </button>
)


export default Button