const express = require('express');
const router = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
     storage: storage,
     limits: {
            fileSize: 1024 * 1024 * 5
        },
        fileFilter: (req, file, cb) => {
            if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
                cb(null, true);
            } else {
                cb(null, false);
                return res.status(400).json({error: 'Only .jpeg, .jpg and .png format allowed!'});
            }
        }
      });

router.post('/uploadFile', upload.single('file'), function(req, res)  {
    res.json({"fileName": req.file.filename});
});

const downloadFile = (req, res) => {
    const fileName = req.params.fileName;
    const path= __basedir + "/uploads/" + fileName;
    res.download(path+fileName, (error) => {
        if(error) {
            res.status(500).json({error: "File not found!"+error});
        }
    })
}

router.get('/files/:fileName', downloadFile);

module.exports = router;