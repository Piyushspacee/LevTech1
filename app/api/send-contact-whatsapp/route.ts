export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    const whatsappNumber = "919520947990"
    const text = `Contact Query:
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}`

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`

    // Log to console (visible in server logs)
    console.log("[v0] Contact inquiry received:", {
      name,
      email,
      phone,
      subject,
      message,
    })

    return Response.json({
      success: true,
      whatsappLink,
    })
  } catch (error) {
    console.error("[v0] Error processing contact inquiry:", error)
    return Response.json({ error: "Failed to send message" }, { status: 500 })
  }
}
