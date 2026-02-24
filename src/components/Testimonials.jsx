import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "VP of Operations",
            company: "TechNexus",
            content: "FlowPilot completely revolutionized how our team manages cross-functional projects. The automations save us nearly 20 hours a week.",
            image: "https://i.pravatar.cc/150?img=47"
        },
        {
            name: "David Chen",
            role: "Lead Developer",
            company: "Innovate Labs",
            content: "The API integrations are seamless. We hooked up our entire CI/CD pipeline in minutes, and the analytics dashboard is simply beautiful.",
            image: "https://i.pravatar.cc/150?img=11"
        },
        {
            name: "Maria Garcia",
            role: "Product Manager",
            company: "ScaleUp",
            content: "I've tried every project management tool out there, but FlowPilot's AI features put it in a league of its own. It practically manages itself.",
            image: "https://i.pravatar.cc/150?img=32"
        }
    ];

    return (
        <section className="py-24 bg-lightBg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-textDark mb-6 tracking-tight">
                        Loved by <span className="text-gradient">innovative teams</span>
                    </h2>
                    <p className="text-lg text-textLight">
                        See how FlowPilot is helping companies scale faster and work smarter.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100 flex flex-col relative group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                                <Quote size={60} />
                            </div>

                            <div className="flex-1 mb-8 relative z-10">
                                <div className="flex gap-1 mb-6 text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-textDark font-medium leading-relaxed text-lg">
                                    "{testimonial.content}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full ring-2 ring-primary/20"
                                />
                                <div>
                                    <h4 className="font-bold text-textDark">{testimonial.name}</h4>
                                    <p className="text-sm text-textLight">{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
