const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

// Default projects data (used when database is empty)
const defaultProjects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management.",
    longDescription: "A comprehensive e-commerce platform built with Next.js, featuring real-time inventory tracking, payment processing with Stripe, and an admin dashboard. The platform handles thousands of concurrent users with optimized database queries and caching strategies.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Web App",
    featured: true,
    order: 1
  },
  {
    title: "AI Dashboard",
    description: "Analytics dashboard with ML-powered insights and predictions.",
    longDescription: "An intelligent analytics dashboard that leverages machine learning models to provide predictive insights. Features include real-time data visualization, automated report generation, and customizable alerts for business metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    github: "https://github.com",
    live: "https://example.com",
    category: "AI/ML",
    featured: true,
    order: 2
  },
  {
    title: "3D Portfolio",
    description: "Interactive 3D portfolio website with immersive animations.",
    longDescription: "A visually stunning portfolio website featuring Three.js-powered 3D graphics, smooth scroll animations, and interactive elements. The site showcases creative work through an immersive storytelling experience.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    tags: ["Three.js", "React", "GSAP", "WebGL"],
    github: "https://github.com",
    live: "https://example.com",
    category: "3D/WebGL",
    featured: true,
    order: 3
  },
  {
    title: "Social Network",
    description: "Real-time social platform with video calling and messaging.",
    longDescription: "A modern social networking application featuring real-time messaging, video calling capabilities, and interactive story features. Built with scalability in mind, supporting millions of concurrent connections.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["React", "Socket.io", "WebRTC", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    category: "Web App",
    featured: false,
    order: 4
  },
  {
    title: "Crypto Tracker",
    description: "Cryptocurrency portfolio tracker with real-time market data.",
    longDescription: "A comprehensive cryptocurrency portfolio management tool with real-time price tracking, portfolio analytics, and market news aggregation. Features include price alerts, historical charts, and tax reporting assistance.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "Redis", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com",
    category: "FinTech",
    featured: false,
    order: 5
  },
  {
    title: "Design System",
    description: "Comprehensive design system with reusable components.",
    longDescription: "A robust design system featuring over 50 reusable components, comprehensive documentation, and theming capabilities. Built with accessibility in mind and used across multiple products within the organization.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    tags: ["React", "Storybook", "TypeScript", "Figma"],
    github: "https://github.com",
    live: "https://example.com",
    category: "UI/UX",
    featured: false,
    order: 6
  }
];

// GET /api/projects - Get all projects
router.get('/', async (req, res) => {
  try {
    let projects = await Project.find().sort({ order: 1, createdAt: -1 });
    
    // If no projects in database, return default projects
    if (projects.length === 0) {
      projects = defaultProjects.map((p, index) => ({
        id: index + 1,
        ...p
      }));
    }

    res.json({
      success: true,
      data: projects
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching projects.'
    });
  }
});

// GET /api/projects/:id - Get single project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching the project.'
    });
  }
});

// POST /api/projects - Create new project (for admin)
router.post('/', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();

    res.status(201).json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the project.'
    });
  }
});

// PUT /api/projects/:id - Update project (for admin)
router.put('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while updating the project.'
    });
  }
});

// DELETE /api/projects/:id - Delete project (for admin)
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while deleting the project.'
    });
  }
});

// GET /api/projects/category/:category - Get projects by category
router.get('/category/:category', async (req, res) => {
  try {
    const projects = await Project.find({ category: req.params.category })
      .sort({ order: 1, createdAt: -1 });

    res.json({
      success: true,
      data: projects
    });
  } catch (error) {
    console.error('Error fetching projects by category:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching projects.'
    });
  }
});

module.exports = router;
