import React from 'react';
import { motion } from 'framer-motion';
import { Power, Workflow, Activity } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Power size={32} className="text-white" />,
            title: "Connect Tools",
            description: "Link your favorite apps in seconds with our 1-click integrations. No coding required.",
            bg: "bg-indigo-500"
        },
        {
            icon: <Workflow size={32} className="text-white" />,
            title: "Automate Workflows",
            description: "Use our visual builder to map out processes and let AI handle the repetitive tasks.",
            bg: "bg-purple-500"
        },
        {
            icon: <Activity size={32} className="text-white" />,
            title: "Analyze Results",
            description: "Watch your productivity soar with real-time metrics and actionable suggestions.",
            bg: "bg-cyan-500"
        }
    ];

    return (
        <section className="py-24 bg-lightBg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-textDark mb-6 tracking-tight">
                        How FlowPilot <span className="text-primary">Works</span>
                    </h2>
                    <p className="text-lg text-textLight">
                        Three simple steps to transform your team's workflow and scale effortlessly.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-12 left-[10%] w-[80%] h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-cyan-200 rounded-full">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.3 }}
                                className="relative z-10 flex flex-col items-center"
                            >
                                <div className={`w-24 h-24 rounded-full ${step.bg} shadow-xl shadow-${step.bg.split('-')[1]}/30 flex items-center justify-center mb-8 transform hover:scale-110 transition-transform duration-300 ring-8 ring-white`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-textDark mb-4">{step.title}</h3>
                                <p className="text-textLight leading-relaxed max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
