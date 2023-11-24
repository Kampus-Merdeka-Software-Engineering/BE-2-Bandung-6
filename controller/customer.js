const model = require('../model/index');
const controller = {};

// controler getall
controller.getAll = async function (req, res) {
    try {
        const result = await model.customer.findAll();
        if (result.length > 0) {
            res.status(200).json({
                message: "Get customer",
                data: result
            });
        } else {
            res.status(200).json({
                message: "Tidak ada data",
                data: []
            });
        }
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
};

module.exports = controller;