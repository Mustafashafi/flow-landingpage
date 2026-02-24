import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "$0",
            description: "Perfect for individuals and small teams just getting started with automations.",
            features: ["Up to 3 users", "Basic automations", "Community support", "100 tasks/month"],
            buttonText: "Start Free",
            isPopular: false
        },
        {
            name: "Pro",
            price: "$19",
            description: "Ideal for growing teams looking to scale their productivity and operations.",
            features: ["Up to 20 users", "Advanced AI workflows", "Priority 24/7 support", "Unlimited tasks", "Custom analytics"],
            buttonText: "Get Started",
            isPopular: true
        },
        {
            name: "Enterprise",
            price: "$49",
            description: "For large organizations that need maximum security and control.",
            features: ["Unlimited users", "Custom AI models", "Dedicated account manager", "SSO integration", "Audit logs"],
            buttonText: "Contact Sales",
            isPopular: false
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-textDark mb-6 tracking-tight">
                        Simple, <span className="text-gradient">transparent</span> pricing
                    </h2>
                    <p className="text-lg text-textLight mb-8">
                        Start for free, then upgrade when you need more power. No hidden fees.
                    </p>

                    <div className="inline-flex items-center p-1 bg-gray-100 rounded-full">
                        <button className="px-6 py-2 rounded-full bg-white shadow-sm text-sm font-semibold text-textDark">Monthly</button>
                        <button className="px-6 py-2 rounded-full text-sm font-semibold text-textLight hover:text-textDark transition">Annually <span className="text-primary text-xs ml-1">-20%</span></button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`relative bg-lightBg rounded-3xl p-8 flex flex-col ${plan.isPopular
                                    ? 'border-2 border-primary shadow-2xl shadow-primary/20 scale-105 z-10'
                                    : 'border border-gray-200 shadow-lg shadow-gray-100/50'
                                }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-textDark mb-2">{plan.name}</h3>
                                <p className="text-textLight text-sm h-10">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <span className="text-5xl font-extrabold text-textDark tracking-tight">{plan.price}</span>
                                <span className="text-textLight font-medium">/mo</span>
                            </div>

                            <ul className="mb-8 space-y-4 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-textDark font-medium">
                                        <div className={`p-1 rounded-full ${plan.isPopular ? 'bg-primary/20 text-primary' : 'bg-green-100 text-green-600'}`}>
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 rounded-xl font-bold transition-all ${plan.isPopular
                                        ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-primary/40'
                                        : 'bg-white text-textDark border border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                {plan.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
