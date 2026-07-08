import React, { forwardRef } from 'react'

function Test(_,ref) {
  return (
    <div ref={ref}>
        <button>Random</button>
    </div>
  )
}

export default forwardRef(Test)