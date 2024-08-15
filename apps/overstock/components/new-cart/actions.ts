'use server'

import { cookies } from "next/headers"

export async function getCart() {
    const value = cookies().get('cart')?.value
    console.log(value)

    if (value) {
        // TODO: Parse
    }

    return undefined
}