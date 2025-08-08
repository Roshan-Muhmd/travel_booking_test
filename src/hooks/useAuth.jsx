import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuthStatus } from '../redux/authslice';

const useAuth = () => {

    
    const isAuthenticated = useSelector((state)=>state?.auth?.isAuthenticated)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = async (formData) => {
     
        localStorage.setItem("loginData",JSON.stringify({isLogged: true, username: formData.email}))
        dispatch(setAuthStatus({isAuthenticated:true,user:formData?.email}))
        navigate("/dashboard")

    }
 

  
    
    return {isAuthenticated,handleLogin }
    
  
}

export default useAuth