import { NextResponse } from "next/server";

const GET = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data  = await res.json();
    return NextResponse.json(data.message);
}

export { GET };