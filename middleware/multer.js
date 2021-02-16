const multer = require('multer');
const fs = require('fs');

// PROFILE
const storageImageProfile = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/profile');
    },
    filename: (req, file, cb) => cb(null, `profile-${Date.now()}.${file.mimetype.split('/')[1]}`)
});

module.exports.uploadImageProfile = multer({ storage: storageImageProfile });


// PROUDCT
const storageImageProduct = multer.diskStorage({
    destination: async (req, file, cb) => {
        const userId = req.query.userId;
        const dir = `./public/images/product/${userId}`;
        // return cb(null, dir);
        let isExists = await fs.existsSync(dir);
        if (!isExists) {
            return fs.mkdir(dir, () => cb(null, dir));
        }
        return cb(null, dir);

    },
    filename: (req, file, cb) => {
        const code = Math.floor(Math.random() * 999);
        cb(null, `product-${Date.now()}-${code}.${file.mimetype.split('/')[1]}`)
    }
});
module.exports.uploadImageProduct = multer({ storage: storageImageProduct });

// CATEGORY
const storageImageCategory = multer.diskStorage({
    destination: async (req, file, cb) => {
        const userId = req.query.userId;
        const dir = `./public/images/category/${userId}`;
        // return cb(null, dir);
        let isExists = await fs.existsSync(dir);
        if (!isExists) {
            return fs.mkdir(dir, () => cb(null, dir));
        }
        return cb(null, dir);

    },
    filename: (req, file, cb) => {
        const code = Math.floor(Math.random() * 999);
        cb(null, `category-${Date.now()}-${code}.${file.mimetype.split('/')[1]}`)
    }
});


module.exports.uploadImageCategory = multer({ storage: storageImageCategory });

// BRAND
const storageImageBrand = multer.diskStorage({
    destination: async (req, file, cb) => {
        const userId = req.query.userId;
        const dir = `./public/images/brand/${userId}`;
        // return cb(null, dir);
        let isExists = await fs.existsSync(dir);
        if (!isExists) {
            return fs.mkdir(dir, () => cb(null, dir));
        }
        return cb(null, dir);

    },
    filename: (req, file, cb) => {
        const code = Math.floor(Math.random() * 999);
        cb(null, `brand-${Date.now()}-${code}.${file.mimetype.split('/')[1]}`)
    }
});


module.exports.uploadImageBrand = multer({ storage: storageImageBrand });