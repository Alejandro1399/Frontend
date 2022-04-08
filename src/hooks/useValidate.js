import React, { useEffect } from 'react'


const useValidate = () => {
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = `${process.env.PUBLIC_URL}/login`

        }
    }, [])

}

export default useValidate