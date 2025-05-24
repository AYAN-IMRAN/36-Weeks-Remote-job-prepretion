"use client"
import React, { useContext } from 'react'
import UserContext from '@/Context/UserContext'

const Child = () => {
  const user = useContext(UserContext);

  return (
    <>
      <p>Welcome from Context, {user}</p>
    </>
  )
}

export default Child
