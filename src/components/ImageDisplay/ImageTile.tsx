import React, { useState } from 'react'
import { UserDataProps } from '../../utils/types/UserDataType'
import { Skeleton } from '@mui/material'

interface Props {
    data: UserDataProps
}

const ImageTile: React.FC<Props> = ({ data }) => {

    const [loadedImage, setLoadedImage] = useState(false)

    return (
        <div
            className='mt-3 p-2 mx-5 text-black rounded-lg shadow-sm dark:bg-sideBar_dark_hover bg-sideBar_light_hover dark:text-navBar_Text'>
            {
                !loadedImage &&
                <Skeleton variant="rectangular"
                    animation="wave"
                    className="rounded"
                    width={135} height={135} />
            }
            <img
                onLoad={() => setLoadedImage(true)}
                className='rounded'
                src={data.picture.large}
                alt={data.name.first} />
            <div>{data.name.first} </div>
        </div>
    )
}

export default ImageTile