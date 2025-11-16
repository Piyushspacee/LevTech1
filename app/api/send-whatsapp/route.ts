import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, phone, userName } = await request.json()

    console.log("[v0] WhatsApp application received:", {
      userName,
      phone,
      message,
      timestamp: new Date().toISOString(),
    })

    const encodedMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/919520947990?text=${encodedMessage}`

    return NextResponse.json(
      {
        success: true,
        whatsappLink,
        message: "Application submitted successfully",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error processing WhatsApp request:", error)
    return NextResponse.json({ success: false, error: "Failed to process request" }, { status: 500 })
  }
}
