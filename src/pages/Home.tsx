import React, { useState, useEffect } from 'react'
import { ImageTile, NavigationBar, SkeletonLoader } from '../components'
import { GET_USER_DATA } from '../axios/userAPI'
import { UserDataProps } from '../utils/types/UserDataType'
import { CircularProgress } from '@mui/material'

const Home: React.FC = () => {

    const [data, setData] = useState<UserDataProps[] | null>(null)
    const [isLoading, setLoading] = useState(false)
    const [batchSize, setBatchSize] = useState(50);
    const increaser = 50

    function handleScroll(e: React.UIEvent<HTMLDivElement>) {
        setLoading(true)
        const element = e.target as HTMLDivElement;
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            setTimeout(() => {
                setBatchSize((prevBatchSize) => prevBatchSize + increaser);
            }, 1000);
        }
        setLoading(false)
    }


    const getData = async () => {
        try {
            const res = await GET_USER_DATA()
            const refinedData = res.data.results.map(({ email, name, picture }: UserDataProps) => {
                return {
                    name, email, picture
                }
            })
            setData(refinedData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    useEffect(() => {
        console.log(isLoading)
    }, [isLoading])

    return (
        <div className='dark:bg-dark_feed_secondary h-screen bg-light_feed_primary dark:text-dark_Text text-black'>
            <NavigationBar />

            {/* Body */}
            <div
                onScroll={handleScroll}
                className='flex flex-wrap flex-grow overflow-y-auto h-screen items-center justify-evenly dark:bg-dark_feed_secondary bg-light_feed_primary dark:text-dark_Text text-black'>
                {/* style={{ height: '400px', overflow: 'auto' }} > */}
                {
                    data === null ?
                        <>
                            <CircularProgress />
                        </>
                        :
                        <>
                            {data?.slice(0, batchSize).map((element: UserDataProps, index: number) => {
                                return (
                                    <ImageTile
                                        data={element}
                                        key={index}
                                    />
                                )
                            })
                            }
                            {isLoading ?
                                <SkeletonLoader />
                                : null
                            }
                        </>
                }
            </div>
        </div >
    )
}

export default Home