import mongoose from "mongoose";

const expenseDataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
    },
    paymentMode: {
        type: String,
        required: true,
    },
    expenseType: {
        type: String,
        required: true,
    },
    expenseDate: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const expenseData = mongoose.model('expenseData', expenseDataSchema);

export default expenseData;