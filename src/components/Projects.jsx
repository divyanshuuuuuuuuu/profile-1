import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Calculator as CalcIcon, Palette, ListTodo } from 'lucide-react';
import { Calculator, ColorPicker, TodoList, DemoModal } from './MiniProjects';

export default function Projects() {
    const [activeDemo, setActiveDemo] = useState(null);

    const miniProjects = [
        {
            title: 'Interactive Calculator',
            description: 'A fully functional calculator with basic operations',
            icon: <CalcIcon className="text-cyan-400" size={32} />,
            gradient: 'from-purple-500 to-blue-500',
            component: <Calculator />
        },
        {
            title: 'Color Picker Tool',
            description: 'Pick, generate, and copy color codes instantly',
            icon: <Palette className="text-pink-400" size={32} />,
            gradient: 'from-pink-500 to-purple-500',
            component: <ColorPicker />
        },
        {
            title: 'Todo List App',
            description: 'Simple and elegant task management',
            icon: <ListTodo className="text-cyan-400" size={32} />,
            gradient: 'from-cyan-500 to-blue-500',
            component: <TodoList />
        }
    ];

    const projects = [
        {
            title: 'AI-Powered Dashboard',
            description: 'Modern analytics dashboard with real-time data visualization and AI-driven insights.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
            liveUrl: '#',
            githubUrl: '#',
            gradient: 'from-neon-cyan to-neon-blue',
        },
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
            tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
            liveUrl: '#',
            githubUrl: '#',
            gradient: 'from-neon-purple to-neon-pink',
        },
        {
            title: 'Social Media App',
            description: 'Real-time social networking platform with chat, posts, and stories features.',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
            tags: ['React Native', 'Firebase', 'Redux', 'Socket.io'],
            liveUrl: '#',
            githubUrl: '#',
            gradient: 'from-neon-pink to-neon-cyan',
        },
        {
            title: 'NFT Marketplace',
            description: 'Decentralized marketplace for buying, selling, and trading digital assets.',
            image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
            tags: ['Web3', 'Ethereum', 'React', 'Solidity'],
            liveUrl: '#',
            githubUrl: '#',
            gradient: 'from-neon-blue to-neon-purple',
        },
        {
            title: 'Fitness Tracking App',
            description: 'Mobile app for tracking workouts, nutrition, and health metrics with AI coaching.',
            image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
            tags: ['Flutter', 'TensorFlow', 'Firebase', 'Python'],
            liveUrl: '#',
            githubUrl: '#',
            gradient: 'from-neon-cyan to-neon-purple',
        },
        {
            title: 'Project Management Tool',
            description: 'Collaborative project management platform with kanban boards and team chat.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
            tags: ['Vue.js', 'Express', 'MongoDB', 'WebSocket'],
            liveUrl: '#',
            githubUrl: '#',
            gradient: 'from-neon-pink to-neon-blue',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Featured Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A showcase of my recent work, featuring modern web applications
                        built with cutting-edge technologies.
                    </p>
                </motion.div>

                {/* Interactive Mini Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                        <span className="text-cyan-400">🎮 Try Interactive Demos</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {miniProjects.map((demo, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="relative group cursor-pointer"
                                onClick={() => setActiveDemo(demo)}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${demo.gradient} opacity-20 group-hover:opacity-30 rounded-xl blur-xl transition-opacity`} />
                                <div className="relative glass-card p-6 text-center">
                                    <div className="flex justify-center mb-4">
                                        {demo.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">{demo.title}</h4>
                                    <p className="text-gray-400 text-sm mb-4">{demo.description}</p>
                                    <button className="flex items-center gap-2 mx-auto px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-all border border-cyan-500/30">
                                        <Play size={16} />
                                        Try Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="glass-card overflow-hidden group cursor-pointer"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                            </div>

                            {/* Project Info */}
                            <h3 className="text-xl font-bold mb-2 text-white">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-4 text-sm">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                <a
                                    href={project.liveUrl}
                                    className="flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-colors text-sm font-medium"
                                >
                                    <ExternalLink size={16} />
                                    Live Demo
                                </a>
                                <a
                                    href={project.githubUrl}
                                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                                >
                                    <Github size={16} />
                                    Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Demo Modal */}
            {activeDemo && (
                <DemoModal demo={activeDemo} onClose={() => setActiveDemo(null)} />
            )}
        </section>
    );
}

