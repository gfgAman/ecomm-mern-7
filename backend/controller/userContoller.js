const userController = async(req,res)=>{
    try{
        res.send('helllo world')
    }
    catch(err){
        console.log(err);
        return
    }
}

export default userController