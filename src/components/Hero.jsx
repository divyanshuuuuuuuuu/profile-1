import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ThreeScene from './ThreeScene';
import ShatterText from './ShatterText';

export default function Hero() {
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden flex items-center">
            {/* 3D Background Scene */}
            <div className="absolute inset-0 w-full h-full">
                <Suspense fallback={
                    <div className="h-full w-full flex items-center justify-center">
                        <div className="spinner"></div>
                    </div>
                }>
                    <ThreeScene />
                </Suspense>
            </div>

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900 pointer-events-none"></div>

            {/* Content Overlay */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="space-y-6"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card w-fit"
                        >
                            <Sparkles size={16} className="text-neon-cyan" />
                            <span className="text-sm font-medium text-gray-300">
                                Full Stack Developer
                            </span>
                        </motion.div>

                        {/* Main Heading with Shatter Animation */}
                        <ShatterText
                            text="Hi, I'm Divyanshu Tripathi"
                            className="text-5xl md:text-7xl font-bold leading-tight"
                        />

                        {/* Description */}
                        <p className="text-gray-300 text-lg md:text-xl max-w-lg leading-relaxed">
                            A 16-year-old Full Stack Developer from Satna, Madhya Pradesh, India.
                            Currently pursuing Computer Science Diploma at AKS University, specializing in
                            backend development and database management.
                        </p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <a href="#projects" className="btn btn-primary group">
                                View Work
                                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                            </a>
                            <a href="#contact" className="btn btn-secondary">
                                Contact Me
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex gap-8 pt-8"
                        >
                            <div>
                                <div className="text-3xl font-bold gradient-text">16</div>
                                <div className="text-sm text-gray-500">Years Old</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold gradient-text">CS</div>
                                <div className="text-sm text-gray-500">Diploma</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold gradient-text">100%</div>
                                <div className="text-sm text-gray-500">Passion</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - 3D scene shows through */}
                    <div className="hidden md:block"></div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-neon-cyan rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
}
