import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key_for_build')

export async function POST(request: NextRequest) {
    try {
        const { email, source, utmSource, utmMedium, utmCampaign, utmContent, formLocation, interactionSource } = await request.json()

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            )
        }

        // Log to console for debugging
        console.log(`New email capture:
        Email: ${email}
        Source: ${source}
        Form Location: ${formLocation || 'unknown'}
        Interaction Source: ${interactionSource || 'direct'}
        UTM Source: ${utmSource || 'N/A'}
        UTM Medium: ${utmMedium || 'N/A'}
        UTM Campaign: ${utmCampaign || 'N/A'}
        UTM Content: ${utmContent || 'N/A'}`)

        try {
            const data = await resend.emails.send({
                from: 'AI Strategy <onboarding@resend.dev>',
                to: ['michele@aistrategyllc.com'],
                subject: `New Lead: ${source} (${formLocation || 'unknown'})`,
                html: `
                    <h1>New Lead Captured</h1>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Source Page:</strong> ${source}</p>
                    <p><strong>Form Location:</strong> ${formLocation || 'unknown'}</p>
                    <p><strong>Interaction Source:</strong> ${interactionSource || 'direct'}</p>
                    <hr />
                    <h2>Tracking Details</h2>
                    <ul>
                        <li><strong>UTM Source:</strong> ${utmSource || 'N/A'}</li>
                        <li><strong>UTM Medium:</strong> ${utmMedium || 'N/A'}</li>
                        <li><strong>UTM Campaign:</strong> ${utmCampaign || 'N/A'}</li>
                        <li><strong>UTM Content:</strong> ${utmContent || 'N/A'}</li>
                    </ul>
                `
            })

            return NextResponse.json({ success: true, data })
        } catch (emailError) {
            console.error('Resend Error:', emailError)
            // Return success to client but log error
            return NextResponse.json({ success: true, warning: 'Email failed to send' })
        }
    } catch (error) {
        console.error('Email capture error:', error)
        return NextResponse.json(
            { error: 'Failed to capture email' },
            { status: 500 }
        )
    }
}
