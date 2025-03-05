import { NextResponse } from "next/server";

interface Props {
    params: {
        name?: string
    }
}

export async function GET(req: Request, props: Props) {
    const { name } = props.params;
    const { searchParams } = new URL(req.url)
    const stringCase = searchParams.get('case') ?? "lower"
    const message = `Hello, ${name ?? 'World'}!`
    return NextResponse.json({
        message: stringCase === 'lower' ? message.toLocaleLowerCase() : message.toUpperCase()
    })
}