import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    return NextResponse.json({message: "Database functionality has been disabled."}, {status: 503});
}