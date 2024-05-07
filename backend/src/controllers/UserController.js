const UserService = require('../services/UserService')

const createUser = async (req, res) => {
  try {


    const {
      name,
      email,
      password,
      confirmPassword,
      phone
    } = req.body
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    const isCheckemail = reg.test(email)
    if (!name || !email || !password || !confirmPassword || !phone) {
      return res.status(200).json({
        status: "ERR",
        message: " The input is require",
      })
    } else if (!isCheckemail) {
      return res.status(200).json({
        status: "ERR",
        message: " The email is wrong type",
      })
    } else if (password !== confirmPassword) {
      return res.status(200).json({
        status: "ERR",
        message: " Password confirm incorect",
      })
    }
    console.log('isCheckemail', isCheckemail)
    const respone = await UserService.createUser(req.body);
    return res.status(200).json(respone)
  } catch (e) {
    return res.status(404).json({
      message: e.toString(), // Sửa lỗi ở đây, chắc chắn rằng e là một đối tượng có thể chuyển đổi thành chuỗi
    });
  }
};


const loginUser = async (req, res) => {
  try {
      
      
      const {name, email, password, confirmPassword, phone} = req.body
      const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      const isCheckemail = reg.test(email)
      if(!name || !email || !password || !confirmPassword || !phone){
          return res.status(200).json({
              status: "ERR",
              message: " The input is require",
          })
      } else if (!isCheckemail){
          return res.status(200).json({
              status: "ERR",
              message: " The email is wrong type",
          })
      } else if (password !== confirmPassword){
          return res.status(200).json({
              status: "ERR",
              message: " Password confirm incorect",
          })
      }
      console.log('isCheckemail', isCheckemail)
      const respone = await UserService.loginUser(req.body);
      return res.status(200).json(respone)
  } catch (e) {
      return res.status(404).json({
          message: e.toString(), // Sửa lỗi ở đây, chắc chắn rằng e là một đối tượng có thể chuyển đổi thành chuỗi
      });
  }
};

module.exports = {
  createUser,
  loginUser,
};