const User = require("../models/UserModel")
const bcrypt = require("bcrypt") 

const { genneralAccessToken, genneralRefreshToken } = require("./jwtService");
const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const {name, email, password, confirmPassword, phone} = newUser
        try {
            const checkUser = await User.findOne({
                email : email
            })
            if(checkUser != null){
                resolve({
                    status: 'Ok',
                    message: " the email already",
                    
                })
            }
            const hash = bcrypt.hashSync(password,10)
           const createUser = await User.create({
            name, 
            email, 
            password: hash,
            confirmPassword, 
            phone,
            
           })

           if (createUser){
            resolve({
                status: "Ok",
                message: "Success",
                data: createUser,
               

            }); // Thêm logic để giải quyết promise thành công
           }
            
        } catch (e) {
            reject(e);
        }
    });
};

const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const {name, email, password, confirmPassword, phone} = userLogin
        try {
            const checkUser = await User.findOne({
                email : email

            })
            const access_token = genneralAccessToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })

            const refresh_token = await genneralRefreshToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })

            console.log('access_token', access_token)
            
            if(checkUser == null){
                resolve({
                    status: 'Ok',
                    message: " the user is not defined",
                    
                })
            }

            const comparePassword = bcrypt.compareSync(password,checkUser.password)    
            console.log("comparePassword", comparePassword)


            if(!comparePassword){
                resolve({
                    status: 'Ok',
                    message: " the password or user is incorect",
                    
                })
            }
            resolve({
                status: "Ok",
                message: "Success",
                data: checkUser,
                access_token,
                refresh_token

            }); // Thêm logic để giải quyết promise thành công
           }
            
         catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createUser,
    loginUser,
};