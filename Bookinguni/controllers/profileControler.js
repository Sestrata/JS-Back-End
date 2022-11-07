const { hasUser } = require('../middlewares/guards');
const { getByUserBooking } = require('../services/hotelService');

const profileController = require('express').Router();

profileController.get('/', hasUser(), async (req, res) => {
    const bookings = await getByUserBooking(req.user._id);

    res.render('profile', {
        title: 'Profile Page',
        user: Object.assign({ bookings }, req.user) //ако искаме да са изредени със запетаи трябва да го обърнем в стрингов масив, да го join(', ').split(' ');
    });
});

module.exports = profileController
