'use client'

import { useEffect, useState } from "react"
import { getCart } from "./actions"

function NewCart() {
    const [cart, setCart] = useState<any>()

    useEffect(() => {
        getCart().then((res) => {
            setCart(res)
        })
    }, [])

    return <div>{JSON.stringify(cart, null, 2)}</div>
}

export default NewCart