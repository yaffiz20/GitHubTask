const {
    getUserById,
    addUser,
    updateUserById,
    deleteUserById,
  } = require('../controlers/Controler');
  const userModel = require('../models/userModel'); // בהנחה ש-userModel הוא mock או stub
  
  jest.mock('../models/userModel'); // חיקוי userModel
  