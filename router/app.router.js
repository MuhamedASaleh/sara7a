const app = require(`express`).Router()
const signUpController = require(`../controller/signup.controller`)
const signUpValidation = require(`../validation/signup.validation`)
const signInController = require(`../controller/signIn.controller`)
const signInValidation = require(`../validation/signIn.validation`)
const auth = require(`../middleWare/auth`)
const authorized = require(`../middleWare/authorized`)
app.post(`/signup`,signUpValidation,signUpController )
app.post(`/signIn`,signInValidation,signInController)

const homeController = require(`../controller/displayHome.controller`)
app.get(`/home`,auth,authorized(`user`),homeController)

const shareProfileController = require(`../controller/shareProfile.controller`)
app.get(`/shareProfile`,auth,authorized(`user`),shareProfileController)
const sendMessageController = require(`../controller/sendMessage.controller`)
app.post(`/sendMessage`,auth,authorized(`user`),sendMessageController)


module.exports = app