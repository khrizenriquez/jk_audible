import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("Database Connection Unsuccessull");
  }
}

export const GET = async (req: Request, res: NextResponse) => {
  console.log('----------------------------')
  try {
    await main();
    const books = await prisma.audiobooks.findMany();
    return NextResponse.json({ message: "Success", books }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// export async function GET(request: Request, response: Response) {
//   console.log(`Static ID ${request} ${response}`)
// }
