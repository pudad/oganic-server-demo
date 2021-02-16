const Address = require('../models/address.model');

module.exports = {
    createAddress: async function(req, res, next) {
        try {
            const { userId } = req.params;
            
            // เช็คว่ามี address ของ useId นี้อยู่ไหม
            const existAddress = await Address.findOne({ userId: userId });
            
            // ยังไม่มี address
            if (!existAddress) {

                const address = { ...req.body, isDefault: true };
                const newAddress = new Address();
                newAddress.addresses.push(address);
                newAddress.userId = userId;
                let addres = await newAddress.save();

                return res.status(200).json({ "msg":"เพิ่มที่อยู่ใหม่แล้ว", "addressId":  addres._id});
            }

            // มี address อยู่แล้ว
            const newAddress = { ...req.body, isDefault: false };

            existAddress.addresses.push(newAddress);
            await existAddress.save();

            return res.status(200).json({ "msg":"เพิ่มที่อยู่แล้ว", "addressId":  existAddress._id });
            
        } catch (error) {
            next(error);
        }
    },

    loadAddresses: async function(req, res, next) {
        try {
            res.status(200).json(await Address.find({}))
        } catch (error) {
            next(error);
        }
    },

    loadAddress: async function(req, res, next) {
        try {
            const {userId} = req.params;
            res.status(200).json(await Address.findOne({ userId }))
        } catch (error) {
            next(error);
        }
    },

    // ลบที่อยู่
    delete: async function(req, res, next) {
        try {
            /**
             * ค้นหาที่อยู่
             * กรองโดยไม่เอาที่อยู่ตรงกับ id ที่ส่งมา
             * บันทึกการเปลี่ยนแปลง
             */
            const { userId } = req.params;
            const { addressId } = req.body;

            const address = await Address.findOne({ userId: userId });

            const result = address.addresses.filter(
                addressItem => (addressItem._id).toString() !== addressId
            );

            address.addresses = result
            await address.save();

            return res.status(200).json({ "msg":"ลบที่อยู่แล้ว" });
        } catch (error) {
            next(error);
        }
    }
}