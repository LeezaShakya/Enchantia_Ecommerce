import React, { useState } from 'react'
import { loginApi } from '../../apis/Api'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../../store/userSlice'
import black from "../../assets/images/black.png"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   try {

  //     loginApi({
  //       email: email,
  //       password: password
  //     }).then((res) => {
  //       console.log(res.data)

  //       //dispatch to store
  //       dispatch(addUser(res.data.user))

  //       navigate("/")

  //       toast.success("Login success")

  //     }).catch((err) => {
  //       console.log(err)
  //       toast.error("Login failed")
  //     })

  //   } catch (error) {
  //     toast.error("Login failed")
  //   }

  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    try {

      loginApi({
        email: email,
        password: password
      }).then((res) => {
        console.log(res.data)

        // setting token and user in local storage
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user", JSON.stringify(res.data.user))

        navigate("/")

        toast.success("Login success")

      }).catch((err) => {
        console.log(err)
        toast.error("Login has failed")
      })

    } catch (error) {
      toast.error("Login failed")
    }

  }

  return (
    <div>
      <div className="container conatiner-top mt-5 mainbody ">
        <div className="row">
          <div className="col-md-6 text-center form-side">
            <img src={black} alt="" className='black-logo' />
            <h2 className='login-heading'>LOG IN</h2>

            <p className='para'>Sign-in to view your recent purchases or wishlist and manage your personal details and preferences here.</p>
            <form action="">
              <div className="form-group">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email" name="email" id="" className="form-control form-input" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => setPassword(e.target.value)}

                  type="password" name="password" id="" className="form-control form-input" placeholder='Password' />
              </div>
              <p className='para'>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
              <button
                onClick={handleSubmit}
                className="btn btn-about mt-2 mb-1 w-100">Login</button>
            </form>
          </div>
          <div className='col-md-6 p-0 '>
            <img src="https://i.pinimg.com/564x/ee/62/45/ee62455b8053c2faf6acf45c5a6e51a0.jpg" className='img-fluid loginimg' alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login