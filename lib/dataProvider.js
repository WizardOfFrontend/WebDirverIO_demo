module.exports = {
  getRandomUserID: function () {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    return `ID_${new Date().getTime().toString()}${randomNumber}`
  },

  getRandomPwd: function () {
    let randomNumber = Math.floor(Math.random() * 1000 + 1);
    return `PWD_${new Date().getTime().toString()}${randomNumber}`
  },

  getRandomPhoneNumber: function () {    
    return math.random().toString().slice(2,11);
  },

  getRandomEmail: function () {
    return `${new Date().getTime().toString()}${'@email.com'}`
  }
}

// new Date().getTime() - 1611879186632