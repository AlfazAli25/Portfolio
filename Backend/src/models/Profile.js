const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  level: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  color: {
    type: String,
    default: 'hsl(var(--neon-cyan))'
  }
});

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  bio: [{
    type: String,
    trim: true
  }],
  email: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  stats: {
    yearsExperience: { type: String, default: '5+' },
    projects: { type: String, default: '50+' },
    clients: { type: String, default: '30+' }
  },
  skills: [skillSchema],
  technologies: [{
    type: String,
    trim: true
  }],
  socialLinks: {
    github: String,
    linkedin: String,
    twitter: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Profile', profileSchema);
