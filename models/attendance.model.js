const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    classId: {
        type: String,
        required: true
    },
    attendance: {
        type: Number
    },
    date: {
        type: Date,
        default: new Date()
    }
});



module.exports = mongoose.model('Attendance', attendanceSchema);
