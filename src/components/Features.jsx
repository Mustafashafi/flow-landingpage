import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, BarChart3, Users, GitMerge, LineChart, ShieldCheck } from 'lucide-react';

const Features = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    const features = [
        {
            icon: <BrainCircuit size={24} className="text-primary" />,
            title: "AI Automation",
            description: "Automate repetitive tasks instantly using our advanced AI engine. Save hours of manual work every week.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600"
        },
        {
            icon: <BarChart3 size={24} className="text-secondary" />,
            title: "Smart Analytics",
            description: "Get predictive insights into your team's performance with beautiful, easy-to-understand dashboards.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
        },
        {
            icon: <Users size={24} className="text-accent" />,
            title: "Team Collaboration",
            description: "Work seamlessly with your team in real-time. Share workspaces, comments, and task assignments.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600"
        },
        {
            icon: <GitMerge size={24} className="text-indigo-500" />,
            title: "Workflow Builder",
            description: "Drag and drop to create custom workflows that match your exact business processes.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=600"
        },
        {
            icon: <LineChart size={24} className="text-purple-500" />,
            title: "Real-Time Insights",
            description: "Monitor the health of your projects live, as events happen, without needing manual reports.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
        },
        {
            icon: <ShieldCheck size={24} className="text-cyan-600" />,
            title: "Secure Cloud Sync",
            description: "Enterprise-grade encryption keeps your data safe while syncing instantly across all your devices.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600"
        }
    ];

    return (
        <section id="features" className="py-24 bg-white relative">
            {/* Background decoration */}
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-lightBg to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold tracking-wide uppercase text-sm mb-4">
                        Powering Growth
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-textDark mb-6 tracking-tight leading-tight">
                        Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative inline-block">scale faster
                            <svg className="absolute w-full h-3 -bottom-2 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                            </svg>
                        </span>.
                    </h3>
                    <p className="text-lg text-textLight">
                        FlowPilot comes with a suite of professional tools designed to help modern teams eliminate bottlenecks.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group flex flex-col"
                        >
                            {/* Image Section */}
                            <div className="h-48 md:h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute bottom-4 left-6 z-20 w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 pt-6 flex-1 flex flex-col bg-lightBg/50 relative">
                                <h4 className="text-xl font-bold text-textDark mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h4>
                                <p className="text-textLight leading-relaxed flex-1">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
