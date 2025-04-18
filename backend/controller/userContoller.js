const userController = async(req,res)=>{
    try{
        console.log('inside controller');
        res.send('helllo world')
    }
    catch(err){
        console.log(err);
        return
    }
}

export default userController