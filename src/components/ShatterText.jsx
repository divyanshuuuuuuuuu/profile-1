import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ShatterText({ text, className = '' }) {
    const [isAnimating, setIsAnimating] = useState(true);

    // Split text into words and then into letters
    const words = text.split(' ');

    // Generate random positions for scatter effect
    const getRandomPosition = () => ({
        x: (Math.random() - 0.5) * 1000, // Random X between -500 and 500
        y: (Math.random() - 0.5) * 1000, // Random Y between -500 and 500
        rotate: Math.random() * 720 - 360, // Random rotation between -360 and 360
    });

    useEffect(() => {
        // Reset animation after it completes
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <h1 className={`${className} overflow-visible`}>
            <span className="gradient-text inline-block">
                {words.map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block mr-4 md:mr-6">
                        {word.split('').map((letter, letterIndex) => {
                            const randomPos = getRandomPosition();
                            const globalIndex = words.slice(0, wordIndex).join('').length + letterIndex;

                            return (
                                <motion.span
                                    key={`${wordIndex}-${letterIndex}`}
                                    className="inline-block"
                                    initial={{
                                        x: randomPos.x,
                                        y: randomPos.y,
                                        rotate: randomPos.rotate,
                                        opacity: 0,
                                        scale: 0,
                                    }}
                                    animate={{
                                        x: 0,
                                        y: 0,
                                        rotate: 0,
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: globalIndex * 0.03, // Stagger each letter
                                        type: 'spring',
                                        stiffness: 120,
                                        damping: 12,
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            );
                        })}
                    </span>
                ))}
            </span>
        </h1>
    );
}
