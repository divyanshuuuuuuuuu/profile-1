import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Rocket, Database, Globe } from 'lucide-react';

export default function About() {
    const skills = [
        {
            icon: <Code2 size={32} />,
            title: 'Frontend Development',
            description: 'React, Next.js, Vue.js, TypeScript',
            color: 'text-neon-cyan',
        },
        {
            icon: <Database size={32} />,
            title: 'Backend Development',
            description: 'Node.js, Python, PostgreSQL, MongoDB',
            color: 'text-neon-purple',
        },
        {
            icon: <Palette size={32} />,
            title: 'UI/UX Design',
            description: 'Figma, Adobe XD, Responsive Design',
            color: 'text-neon-pink',
        },
        {
            icon: <Zap size={32} />,
            title: 'Performance',
            description: 'Optimization, Web Vitals, SEO',
            color: 'text-neon-blue',
        },
        {
            icon: <Globe size={32} />,
            title: 'Web3 & Blockchain',
            description: 'Ethereum, Smart Contracts, DApps',
            color: 'text-neon-cyan',
        },
        {
            icon: <Rocket size={32} />,
            title: 'DevOps',
            description: 'Docker, CI/CD, Cloud Deployment',
            color: 'text-neon-purple',
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
        <section id="about" className="py-24 relative">
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
                        <span className="gradient-text">About Me</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A passionate 16-year-old Full Stack Developer from Satna, Madhya Pradesh,
                        specializing in backend development and database management.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-card group cursor-pointer"
                        >
                            <div className={`${skill.color} mb-4 transition-transform group-hover:scale-110`}>
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">
                                {skill.title}
                            </h3>
                            <p className="text-gray-400">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* About Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 glass-card max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl font-bold mb-4 gradient-text">
                        My Journey
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        I'm Divyanshu Tripathi, a 16-year-old Full Stack Developer currently pursuing
                        a Computer Science Diploma at AKS University in Satna, Madhya Pradesh.
                        My passion lies in backend development and database management, where I build
                        robust and scalable solutions.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        From frontend to backend, and everything in between - I love working across
                        the entire stack. Whether it's crafting beautiful user interfaces or designing
                        efficient database architectures, I'm always eager to learn new technologies
                        and take on challenging projects that push my skills to the next level.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
