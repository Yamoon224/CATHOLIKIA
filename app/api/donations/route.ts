import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { amount, donorInfo } = await request.json()

    if (!amount || !donorInfo?.name || !donorInfo?.email) {
      return NextResponse.json({ error: "Amount, donor name, and email are required" }, { status: 400 })
    }

    if (amount < 100) {
      return NextResponse.json({ error: "Minimum donation amount is 100 FCFA" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(donorInfo.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Process payment with payment gateway
    // 2. Save donation record to database
    // 3. Send confirmation email
    // 4. Update donation statistics

    const donationRecord = {
      id: `don_${Date.now()}`,
      amount,
      donorInfo: {
        ...donorInfo,
        // Don't store sensitive info in logs
        email: donorInfo.anonymous ? "[ANONYMOUS]" : donorInfo.email,
      },
      timestamp: new Date().toISOString(),
      status: "completed",
    }

    console.log("Donation processed:", donationRecord)

    // Simulate payment processing time
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return NextResponse.json(
      {
        message: "Donation processed successfully",
        donationId: donationRecord.id,
        amount,
        status: "completed",
        receiptUrl: `/receipts/${donationRecord.id}`,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Donation processing error:", error)
    return NextResponse.json({ error: "Payment processing failed" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // Return current donation statistics
    const stats = {
      totalRaised: 3025000,
      targetAmount: 5000000,
      donorCount: 11,
      recentDonations: [
        { amount: 5000, date: "2024-01-20", anonymous: false },
        { amount: 10000, date: "2024-01-19", anonymous: true },
        { amount: 2500, date: "2024-01-18", anonymous: false },
      ],
    }

    return NextResponse.json(stats, { status: 200 })
  } catch (error) {
    console.error("Error fetching donation stats:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
