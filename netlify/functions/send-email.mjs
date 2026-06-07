import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Basic HTML escape to prevent injection in your inbox
function escape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br/>')
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const { name, email, message } = JSON.parse(event.body)

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      }
    }

    const { error } = await resend.emails.send({
			from: 'Portfolio Contact <onboarding@resend.dev>',
			to: 'abdullah.229op@gmail.com',
      replyTo: email,  // hitting Reply in Gmail goes straight to the visitor ✅
      subject: `Portfolio Contact from ${escape(name)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="border-bottom: 2px solid #eee; padding-bottom: 8px;">
            New message from your portfolio
          </h2>
          <p><strong>Name:</strong> ${escape(name)}</p>
          <p><strong>Email:</strong> ${escape(email)}</p>
          <p><strong>Message:</strong><br/><br/>${escape(message)}</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return { statusCode: 500, body: JSON.stringify({ error: error.message }) }
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) }
  } catch (err) {
    console.error('Handler error:', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal server error' }) }
  }
}