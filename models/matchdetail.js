const mongoose = require('mongoose');
const schema = mongoose.Schema;

const matchdetailSchema = new schema(
    {
        title: {type: String, required: true},
        body: {type: String, requi: true}
    }, {timestamps: true}
);

const Matchdetail = mongoose.model('MatchDetail', matchdetailSchema);

module.exports = Matchdetail;