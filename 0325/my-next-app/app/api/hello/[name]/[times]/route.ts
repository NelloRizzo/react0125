import { NextResponse } from "next/server";

interface Props {
    params: {
        name?: string,
        times?: number
    }
}

export async function GET(req: Request, { params }: Props) {
    const { name, times } = await params
    const { searchParams } = new URL(req.url)
    const stringCase = searchParams.get('case') ?? "lower"
    const message = `Hello, ${name ?? 'World'}!`.repeat(times ?? 1)
    return NextResponse.json({
        message: stringCase === 'lower' ? message.toLocaleLowerCase() : message.toUpperCase()
    })
}