var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars')
const path = require('path')
var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'alhussein_99@hotmail.com',
    pass: './q1m2n3/.'
  }
});
const handlebarOptions = {
    viewEngine: {
      extName: ".handlebars",
      partialsDir: path.resolve(__dirname, "views"),
      defaultLayout: false,
    },
    viewPath: path.resolve(__dirname, "views"),
    extName: ".handlebars",
};
transporter.use('compile', hbs(handlebarOptions))

const welcomeEmail = async(email, fname, lname, token) => {
    try{
      var mailOptions = {
        from: 'alhussein_99@hotmail.com',
        to: email,
        subject: 'Welcome to LinkedEd',
        template: 'WelcomeEmail',
        context: {
            email,
            fname,
            lname,
            token: `http://localhost:3000/verify/${token}`
        }
      };
      const message = await transporter.sendMail(mailOptions)
      console.log('mail sent')
      return message
    }catch(e){
        console.log(e)
      return "error"
    }
};
module.exports = welcomeEmail