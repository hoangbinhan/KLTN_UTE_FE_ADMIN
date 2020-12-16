//libs
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
//components
import HeaderPage from '@/components/HeaderPage'
import DetailStaffTab from './components/DetailStaffTab'
//hooks
import { useRouter } from '@/hooks'
//action
import { fetchDetailStaff } from '@/actions/Staff/FetchDetailStaff'

const DetailStaffPage = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const paramProduct = router.query.id
    useEffect(() => {
        dispatch(fetchDetailStaff({ params: paramProduct }))
    }, [dispatch, paramProduct])
    return (
        <>
            <HeaderPage title='Detail Staff' />
            <DetailStaffTab />
        </>
    )
}

export default DetailStaffPage
