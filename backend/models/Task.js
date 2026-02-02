const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    complete: { type: Boolean, default: false } });

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    status: { type: String, default: 'pending', enum: ['pending', 'in-progress', 'completed'] },
    priority: { type: String, default: 'medium', enum: ['low', 'medium', 'high'] },
    dueDate: { type: Date, default: null },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    attachments: [{ type: String }],
    todoChecklist : [toDoSchema],
    progress: { type: Number, default: 0 }
}, { timestamps: true }); 

module.exports = mongoose.model("Task", taskSchema);