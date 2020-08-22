const express = require('express');
const pug = require('pug');
const config = require('./config')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const rentData = require('./rent.data.json')
const ENV = process.env.NODE_ENV || 'development';

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rohalskyi@gmail.com',
        pass: 'Axelive4111'
    }
});

app.use( express.static('public') );

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 

function rootPath(fileName) {
    return __dirname + "/" + fileName;  
}

function renderPage(res,pageName,data) {
    const compiledFunction = pug.compileFile(`pug/pages/${pageName}.pug`,{
        basedir: rootPath("")
    });
    const result = compiledFunction({
        pageName: pageName,
        ...data
    });
    res.set('Content-Type', 'text/html');
    res.end(result);
}

app.get( '/' , function(req,res) {
    res.redirect('/home');
});

app.get( '/home' , function(req, res) {
    renderPage(res,'home');
});

app.get( '/about' , function(req,res) {
    renderPage(res,'about');
});

app.get( '/rent' , function(req,res) {
    renderPage(res,'rent',{rentData});
});

app.get( '/play-with-me' , function(req,res) {
    console.log(rentData);
    renderPage(res,'play');
});

app.get( '/gallery' , function(req,res) {
    renderPage(res,'gallery');
});

function renderMail(mail) {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
     <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Demystifying Email Design</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body>
        ${mail}
    </body>
    </html>`
}

app.post( '/api/submit-contacts' , function(req,res) {

    const {name,phone,email,comment} = req.body;

    var mailOptions = {
        from: email,
        to: 'ukrainekava@gmail.com',
        subject: 'comment from NNM site',
        html: renderMail(`
            <p><bold>Name:</bold> <br/>${name}</p>
            <p><bold>Phone:</bold> <br/>${phone}</p>
            <p><bold>Comment:</bold> <br/>${comment}</p>
        `)
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    res.json({success: true});

});

app.listen(config[ENV].PORT, () => {
    console.log("Server listen on:", "http://localhost:" + config[ENV].PORT);
});