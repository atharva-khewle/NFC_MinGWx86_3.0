const asyncHandler = (fn) => 
    //function ke andar ek async function bana dala (higher order fn)
    async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            res.status(error.code || 500).json({
                success: false, 
                message: error.message
            })
        }
    }


// using PROMISES
// const asyncHandler = (reqHandler) => {
//     (req, res, next) => {
//         Promise.resolve(reqHandler(req,res,next)).catch((err) => next(err))
//     }
// }    

export {asyncHandler}