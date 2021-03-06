import React, {useState, useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../utils/Notification/Notification'

function Activation() {
    const {activation_token} = useParams()
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        if(activation_token){
            const activationEmail = async () => {
                try {
                    const res = await axios.post('/user/activation', {activation_token})
                    setSuccess(res.data.msg)
                } catch (err) {
                    err.response.data.msg && setErr(err.response.data.msg)
                }
            }
            activationEmail()
        }
    },[activation_token])

    return (
        <div className="container-Fluid bg-black">
            <div className="active_page my-auto py-5">
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

            <div className="container text-center">
            <button className="btn bg-success">Click Here to 
                <Link to="/Login" exact>Login
                </Link>
            </button>
            </div>
        </div>
        </div>
    )
}

export default Activation