import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authslice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

useEffect(() => {
  
    dispatch(logout())
    navigate("/login")

}, [])


  return <></>
}

export default Logout