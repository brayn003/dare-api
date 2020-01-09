const DaresCompleted = require('../../models/DaresCompleted');
const Subscription = require('../../models/Subscription');

const controller = async (req, res) => {
    const {user} = req;
    const daresAccepted = await DaresCompleted.countDocuments({ userId: user.id });
    const daresCompleted = await DaresCompleted.countDocuments({ userId: user.id, completed: true });
    const interests = await Subscription.find({userId: user.id});
    return res.status(200).json({
        user,
        stats: {
            daresAccepted,
            daresCompleted,
        },
        interests,
    })
}

module.exports = controller;