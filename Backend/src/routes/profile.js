const express = require('express');
const Profile = require('../models/Profile');

const router = express.Router();

// Default profile data (used when database is empty)
const defaultProfile = {
  name: "Alfaz Ali",
  title: "Full-Stack Developer",
  bio: [
    "Hello! I'm John, a full-stack developer based in San Francisco. I specialize in building exceptional digital experiences that live on the web.",
    "My interest in web development started back in 2015 when I decided to try creating custom themes for forums — turns out hacking together HTML & CSS taught me a lot about how the web works.",
    "Fast-forward to today, and I've had the privilege of working at a startup, a large corporation, and a design studio. My main focus these days is building accessible, inclusive products and digital experiences."
  ],
  email: "hello@alfazali.dev",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  stats: {
    yearsExperience: "5+",
    projects: "50+",
    clients: "30+"
  },
  skills: [
    { name: "React / Next.js", level: 95, color: "hsl(var(--neon-cyan))" },
    { name: "TypeScript", level: 90, color: "hsl(var(--neon-cyan))" },
    { name: "Node.js / Express", level: 88, color: "hsl(var(--neon-purple))" },
    { name: "MongoDB / PostgreSQL", level: 85, color: "hsl(var(--neon-purple))" },
    { name: "Three.js / WebGL", level: 80, color: "hsl(var(--neon-pink))" },
    { name: "Python / Django", level: 75, color: "hsl(var(--neon-pink))" },
    { name: "AWS / Docker", level: 78, color: "hsl(var(--neon-cyan))" },
    { name: "UI/UX Design", level: 85, color: "hsl(var(--neon-purple))" }
  ],
  technologies: [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
    "MongoDB", "PostgreSQL", "Redis", "GraphQL", "REST APIs", "Three.js",
    "Framer Motion", "Tailwind CSS", "SASS", "Git", "Docker", "AWS",
    "Vercel", "Figma", "Adobe XD", "Photoshop"
  ],
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }
};

// GET /api/profile - Get profile data
router.get('/', async (req, res) => {
  try {
    let profile = await Profile.findOne();
    
    // If no profile in database, return default profile
    if (!profile) {
      profile = defaultProfile;
    }

    res.json({
      success: true,
      data: profile
    });
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching profile.'
    });
  }
});

// PUT /api/profile - Update profile (for admin)
router.put('/', async (req, res) => {
  try {
    let profile = await Profile.findOne();
    
    if (profile) {
      // Update existing profile
      profile = await Profile.findByIdAndUpdate(
        profile._id,
        req.body,
        { new: true, runValidators: true }
      );
    } else {
      // Create new profile
      profile = new Profile(req.body);
      await profile.save();
    }

    res.json({
      success: true,
      data: profile
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while updating profile.'
    });
  }
});

// GET /api/profile/skills - Get skills only
router.get('/skills', async (req, res) => {
  try {
    const profile = await Profile.findOne().select('skills technologies');
    
    if (!profile) {
      return res.json({
        success: true,
        data: {
          skills: defaultProfile.skills,
          technologies: defaultProfile.technologies
        }
      });
    }

    res.json({
      success: true,
      data: {
        skills: profile.skills,
        technologies: profile.technologies
      }
    });
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching skills.'
    });
  }
});

// GET /api/profile/contact-info - Get contact info only
router.get('/contact-info', async (req, res) => {
  try {
    const profile = await Profile.findOne().select('email phone location socialLinks');
    
    if (!profile) {
      return res.json({
        success: true,
        data: {
          email: defaultProfile.email,
          phone: defaultProfile.phone,
          location: defaultProfile.location,
          socialLinks: defaultProfile.socialLinks
        }
      });
    }

    res.json({
      success: true,
      data: {
        email: profile.email,
        phone: profile.phone,
        location: profile.location,
        socialLinks: profile.socialLinks
      }
    });
  } catch (error) {
    console.error('Error fetching contact info:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching contact info.'
    });
  }
});

module.exports = router;
