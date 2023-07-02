import React from 'react'
import { Tooltip, Zoom, Avatar } from '@mui/material';
import { Lightbulb, NightlightRound, Logout } from '@mui/icons-material';
import { selectTheme, setTheme } from '../../redux/features/themeSlice';
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setUser } from '../../redux/features/userSlice';


const NavigationBar: React.FC = () => {
    const dispatch = useDispatch()
    const theme = useSelector(selectTheme)
    const user = useSelector(selectUser)

    const handleThemeChange = () => {
        dispatch(setTheme({
            darkTheme: !theme
        }))
    }

    const logOut = () => {
        dispatch(setUser({
            userName: null
        }))
    }



    return (
        <div
            className='flex w-full sticky items-center flex-wrap justify-between mt-0 bg-dark_feed_primary text-navBar_Text p-3'>
            <div className='font-bold lg:text-xl md:text-xl ml-3'>Infinite scrolling application</div>
            <div className='flex items-center mr-3 gap-3'>
                <div
                    onClick={handleThemeChange}
                    className='cursor-pointer hover:bg-navBar_secondary rounded ease-in p-2 duration-150'
                >
                    <Tooltip
                        TransitionComponent={Zoom}
                        TransitionProps={{ timeout: 400 }}
                        title="Switch theme">
                        {theme ? <Lightbulb className='h-3' /> : <NightlightRound className='h-3' />}
                    </Tooltip>
                </div>

                <div
                    onClick={logOut}
                    className='cursor-pointer hover:bg-navBar_secondary rounded ease-in p-2 duration-150'
                >
                    <Tooltip
                        TransitionComponent={Zoom}
                        TransitionProps={{ timeout: 400 }}
                        title="Logout">
                        <Logout className='h-3' />
                    </Tooltip>
                </div>

                <div>
                    <Avatar src={`https://avatars.dicebear.com/api/initials/${user}.svg`} />
                </div>


            </div>

        </div>
    )
}

export default NavigationBar