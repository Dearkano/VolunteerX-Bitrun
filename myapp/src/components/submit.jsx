import React from 'react'

export default ({ text = '愿此刻永恒', onClick, disabled = false,style }) => (
  <button
    onClick={onClick} style={style}
    className={`confirm__button--primary ${disabled ? 'confirm__button--disabled' : ''}`}
    disabled={disabled}
  >
    {text}
  </button>
)
