const express = require('express');
const mongoose = require('mongoose');
const matchdetail = require('./models/matchdetail');

const app = express();
//Connecct to MongoDB
dbURI = 'mongodb+srv://ManojPal569:aSWN1RA1v5nireAk@cluster0.ksaaceq.mongodb.net/EPSAS?retryWrites=true&w=majority';
mongoose.connect (dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>{
        console.log('connected with database');
        app.listen(3000);
    })
    .catch((err)=>{console.log(err)});

app.get('/add-matchdetail', (req, res)=>
{
    console.log('add-match handler called');
    const matchdetail1 = new matchdetail (
        {
            title: 'Match Between Targaryens and Leninsters',
            body: 'This macth was palyed between the Targaryens and Leninsters and Targaryens have won this match.'
        }
    )

    matchdetail1.save()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
});

app.get('/all-matchdetails', (req, res)=>{
    matchdetail.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });

});

app.get('/single-matchdetail', (req, res)=>{
    matchdetail.findById('62ed01a81532fa423c107fdb')
    .then((result)=>{res.send(result);})
    .catch((err)=>{console.log(err);})
});