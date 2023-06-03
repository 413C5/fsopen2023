import React from 'react'

const Notification = ({ message, state }) => {
  //Nothing
  if (message === null && state === false)
    return null

  //Error Message
  else if (message !== null && state === false)
    return (
      <div className='error'>
        {message}
      </div>
    )

  //Success
  else if (message !== null && state === true)
    return (
      <div className='good'>
        {message}
      </div>
    )
}

export default Notification