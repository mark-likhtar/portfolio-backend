const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  image: { type: Buffer },
  projectName: { type: String, required: [true, 'projectName is required'] },
  readme: { type: String },
  projectLanguage: { type: String },
  isEdited: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
});

module.exports = mongoose.model('Project', projectSchema);
