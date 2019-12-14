const DaresCompleted = require('../../models/daresCompleted');

module.exports = async  (req,res) => {
const {body} = req;
    if (!body.imageUrl) {
      throw new Error('Please Upload an Image to proceed');
    };
    const completed = await DaresCompleted.create(body)
    res.send(completed);
}

