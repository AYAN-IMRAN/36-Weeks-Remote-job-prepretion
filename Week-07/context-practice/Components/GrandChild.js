"use Client"
import React, { useContext } from 'react'
import Parent from './Parent'
import UserContext from '@/Context/UserContext'

const GrandChild = ({user}) => {
    const GrandUSer = useContext(UserContext)
  return (
 <>
 <p>
    Welcome to Grandchild ,{GrandUSer}
 </p>
 
 </>
  )
}

export default GrandChild