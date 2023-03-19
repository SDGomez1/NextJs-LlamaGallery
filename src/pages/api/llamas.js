import DB from '../../database/controller'


const allLlamas = async (req,res) => {
    try{
        const db = new DB()
        const allData = await db.getAllData()
        res.status(200).json((allData))
        
    }
    catch(e){
        console.log(e)
        res.status(500).json({'message': 'no se conecto'})
    }
}

export default allLlamas