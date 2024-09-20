import type { NextApiRequest, NextApiResponse } from 'next'
import { orario } from "../../db/schema";
import { db } from "../../db/client"; 

const records = db.select().from(orario).all()

type ResponseData = {
  record: any
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({record: records })
}