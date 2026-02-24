import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-lightBg">
            {/* Background Gradients & Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />

                {/* Antigravity floating shapes */}
                <motion.div
                    animate={{ y: [0, -30, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="hidden lg:block absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full backdrop-blur-xl border border-white/50"
                />
                <motion.div
                    animate={{ y: [0, 40, 0], rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="hidden lg:block absolute bottom-1/4 right-1/3 w-16 h-16 bg-gradient-to-tl from-secondary/20 to-transparent rounded-2xl backdrop-blur-xl border border-white/50"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-sm font-medium mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            FlowPilot AI 2.0 is out
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-extrabold text-textDark tracking-tight mb-6 leading-[1.1]">
                            Automate Work. <br />
                            <span className="text-gradient">Accelerate Growth.</span>
                        </h1>

                        <p className="text-lg lg:text-xl text-textLight mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
                            AI-powered productivity system for modern teams. Connect your tools, automate repetitive tasks, and get real-time insights—all in one place.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all">
                                Start Free Trial
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-textDark bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2 transition-all group">
                                <Play size={20} className="text-primary group-hover:scale-110 transition-transform" />
                                Watch Demo
                            </button>
                        </div>

                        <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-textLight">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <p>Joined by 10,000+ teams</p>
                        </div>
                    </motion.div>

                    {/* Right Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="relative lg:h-[600px] flex items-center"
                    >
                        {/* Main Mockup Window */}
                        <div className="relative z-10 w-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 bg-white border border-gray-100">
                            {/* Fake Window Header */}
                            <div className="h-10 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>

                            {/* Real Dashboard Image */}
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                                alt="Dashboard UI"
                                className="w-full h-auto object-cover border-none"
                            />
                        </div>

                        {/* Floating Card Parallax */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -bottom-10 -left-10 z-20 bg-white p-5 rounded-2xl shadow-xl shadow-gray-200 border border-gray-50 flex items-center gap-4 hidden md:flex"
                        >
                            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 font-bold">
                                +24%
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-textDark">Efficiency Boost</p>
                                <p className="text-xs text-textLight">Last 30 days active</p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
