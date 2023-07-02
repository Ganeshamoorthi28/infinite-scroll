import React, { useEffect, useState } from 'react'
import { selectUser, setUser } from '../redux/features/userSlice'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { Alert } from '@mui/material'



const Login: React.FC = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const correctCredentials = {
        userName: "foo",
        password: "bar"
    }

    const initialiseUser = () => {
        dispatch(setUser({
            userName: userName
        }))
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (userName !== correctCredentials.userName || password !== correctCredentials.password) {
            setError("Invalid credentials!")
        } else {
            initialiseUser()
        }
    }

    const ErrorAlert = ({ message }: { message: string }) => {
        if (message === "") return null
        else {
            return (
                <Alert severity="error" variant="filled">{message}</Alert>
            )
        }
    }

    useEffect(() => {
        if (user !== null)
            navigate("/home")
    }, [user])



    return (
        <div className='flex flex-col items-center justify-center h-screen dark:bg-dark_feed_primary bg-light_feed_primary dark:text-dark_Text text-black'>

            <div className='flex flex-col p-10 lg:p-16 gap-3 dark:bg-dark_feed_secondary shadow-lg bg-light_feed_secondary rounded-lg dark'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col items-center justify-center gap-5 '>
                        <div className='font-bold text-2xl'>
                            Login to the application
                        </div>
                        <input type="text"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setUserName(e.target.value)
                                if (error !== "") setError("")
                            }}
                            autoFocus
                            placeholder='Username'
                            className='focus:outline-none lg:w-[300px] rounded-md bg-light_feed_primary dark:bg-dark_feed_primary dark:text-white text-black p-1.5'
                            required
                        />

                        <input type="password"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            className='focus:outline-none lg:w-[300px]  rounded-md bg-light_feed_primary dark:bg-dark_feed_primary dark:text-white text-black p-1.5'
                            required
                            placeholder='password'
                        />

                        <button type="submit" className='button '>
                            Login
                        </button>

                        <ErrorAlert
                            message={error}
                        />
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login