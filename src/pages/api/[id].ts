import { NextApiRequest, NextApiResponse } from 'next'
import DB from '../../database/controller'

const Llamas = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const db = new DB()
        const llamaId = req.query.id
        const llama = await db.getDataByName(llamaId)
        res.status(200).json((llama))

    }
    catch (e) {
        console.log(e)
        res.status(500).json({ "message": "No se ha encontrado nigun item con ese ID" })
    }
}

export default Llamas