'use client'

import { useEffect, useState } from 'react'

function AppStylesheets() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, [])

    if (show) { 
        return <><link href="//checkout.overstock.com/cdn/shop/t/69/assets/content-cards.css?v=33493646339880876491720759668" rel="stylesheet" type="text/css" media="all" /></>
    }

    return null
}

export default AppStylesheets
