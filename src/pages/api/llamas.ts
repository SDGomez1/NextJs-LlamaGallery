import { NextApiRequest, NextApiResponse } from 'next'
import DB from '../../database/controller'


const allLlamas = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = new DB()
    const allData = await db.getAllData()
    res.status(200).json((allData))

  }
  catch (e) {
    console.log(e)
    res.status(500).json({ 'message': 'no se conecto' })
  }
}

export default allLlamas