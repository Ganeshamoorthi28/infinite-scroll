import React from 'react'
import { Skeleton } from '@mui/material'

const SkeletonLoader: React.FC = () => {
    const numberOfSkeletons = 5
    return (
        <div className='flex w-full gap-7 overflow-hidden items-center justify-evenly dark:bg-dark_feed_secondary bg-light_feed_primary dark:text-dark_Text text-black'>
            {Array.from(Array(numberOfSkeletons)).map((_, index) => (
                <Skeleton
                    key={index}
                    variant="rectangular"
                    animation="wave"
                    className="rounded"
                    width={135} height={135}
                />
            ))}
        </div>
    )
}

export default SkeletonLoader