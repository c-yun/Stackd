require('dotenv').config();
// const User = require("../models/user")
// const Article = require("../models/article")
const express = require('express');
const mongoose = require('mongoose');
const expressJWT = require('express-jwt');
const RateLimit = require('express-rate-limit');
const helmet = require('helmet');
const multer = require('multer');
const upload = multer({dest: './uploads/'});
const cloudinaryStorage = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary');
const User = require('./models/user');

const app = express();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    allowedFormats: ['jpg', 'png'],
    folder: 'Stackd',
    transformation: [{height: 250, width: 250, crop: 'limit'}] 
});

const parser = multer({storage: storage});

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(helmet());

const loginLimiter = new RateLimit({
    windowMs: 5*60*1000, // 5 minutes
    max: 3,
    delayMs: 0, // disables
    message: 'Maximum login attempts exceeded! Fuck off hacker!'
});

const signupLimiter = new RateLimit({
    windowMs: 60*60*1000, // 1 hour
    max: 3,
    delayMs: 0, // disabled
    message: 'Maximum accounts created. Please try again later.'
})
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost/jwtAuth', {useNewUrlParser: true});
const db = mongoose.connection;
db.once('open', () => {
    console.log(`Connected to Mongo on ${db.host}:${db.port}`);
});
db.on('error', (err) => {
    console.log(`Database error:\n${err}`);
});

app.get('/UpdateProfile', (req,res) => {
    db.user.findOne({
        where: {userId: req.user.id}
    }).then(function(pic) {
        if (pic) {
            res.render('user/profile', {pic: pic.link});
        } else {
            res.render('user/profile', {pic: null});
        }
    });
});

app.post('/UpdateProfile', parser.single('myPic'), (req,res) => {
    const image = {};
    image.url = req.file.url;
    image.id = req.file.public_id;

    User.findByIdAndUpdate(
        req.body.userId,
        {
            $set: {image: req.file.secure_url}
        },
        {new: true},
        (err, user) => {
            if (err) console.log('ERROR', err);
            user.save(() => {
                res.redirect('profile/update');
            });
        }
    ).catch((err) => console.log(err));
});

app.use("/profile", require("./routes/profile"));

app.use('/auth/login', loginLimiter);

app.use('/auth/signup', signupLimiter);

app.use('/auth', require('./routes/auth'));

app.use('/locked', expressJWT({secret: process.env.JWT_SECRET}).unless({method: 'POST'}), require('./routes/locked'));

app.listen(process.env.PORT, () => {
    console.log(`You're listening to the sweet sounds of port ${process.env.PORT} in the morning...`);
});