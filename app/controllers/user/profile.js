const DaresCompleted = require('../../models/DaresCompleted');
const Subscription = require('../../models/Subscription');

const controller = async (req, res) => {
    const {user} = req;
    const daresAccepted = await DaresCompleted.countDocuments({ userId: user.id });
    const daresCompleted = await DaresCompleted.countDocuments({ userId: user.id, completed: true });
    const subs = await Subscription.find({userId: user.id}).populate('interestId');
    return res.status(200).json({
        user,
        stats: {
            daresAccepted,
            daresCompleted,
        },
        interests: subs.map(sub => sub.interestId),
    })
}

module.exports = controller;