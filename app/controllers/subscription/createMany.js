const Subscription = require('../../models/Subscription');

const controller = async (req, res) => {
    const {user, body} = req;
    const {interests} = body;
    const toWrite = interests.map(interestId => ({ interestId, userId: user.id }));
    await Subscription.insertMany(toWrite);
    const response = await Subscription.find({interestId: {$in: interests}});
    return res.status(201).json(response);
}

module.exports = controller;