import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const { email, source } = await request.json()

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            )
        }

        // For now, we'll log the email and source
        // In production, you'd want to integrate with an email service
        console.log(`New email capture from ${source}: ${email}`)

        // Send email notification to michele@aistrategyllc.com
        // Using a simple mailto approach for now - in production you'd use
        // a service like Resend, SendGrid, or AWS SES

        // For this MVP, we'll store the capture and return success
        // The email will be visible in the server logs

        return NextResponse.json({
            success: true,
            message: 'Email captured successfully'
        })
    } catch (error) {
        console.error('Email capture error:', error)
        return NextResponse.json(
            { error: 'Failed to capture email' },
            { status: 500 }
        )
    }
}
