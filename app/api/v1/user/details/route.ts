import { NextResponse } from "next/server"


export function GET(){ //route method must be capital like GET (not get or Get) , same for all CRUD Operations

    return NextResponse.json({
        user:"Uday",
        email:"Bhatnagar502@gmail.com"
    })
}


export  async function POST(req:NextResponse){ 

    const data=await req.json(); //to get the request data



    
    return NextResponse.json({
       message:"you have signed in"
    })
}