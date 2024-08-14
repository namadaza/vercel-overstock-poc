import { type ApiData } from '@vercel/flags'
import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json<ApiData>({ definitions: {
        'featuredDeals': {
            description: 'The date of the featured deals to display.',
            // TODO: Dynamic
            options: [{
                label: '2024-08-09',
                value: '2024-08-09',
            }]
        }
    } })
}