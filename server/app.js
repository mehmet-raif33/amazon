const express = require('express');
const fs = require('fs');
const app = express();
const multer = require('multer');
const convertToBase64 = require('image-to-base64');
const upload = multer({ dest: 'uploads/' })

app.post('/image', upload.single('image'), async (req,res)=>{
    const image = req.file.image;
    await convertToBase64(image)
    .then(res=> console.log(res))
    .catch((error) => {
        console.log(error); // Logs an error if there was one
    })
    res.json({status:'Success'})
})

app.listen(3000,()=>{
    console.log('Sunucu çalışmakta!!')
})