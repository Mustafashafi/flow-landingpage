import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LayoutDashboard, Users, CreditCard, Activity, Bell, FileText, ChevronDown } from 'lucide-react';

const DashboardPreview = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const yImage = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section id="dashboard" className="py-32 bg-darkBg relative overflow-hidden text-white">
            {/* Background Orbs */}
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
            <div className="absolute top-[-10%] right-[20%] w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[90px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium mb-6 uppercase tracking-wider"
                    >
                        Inside The Machine
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white"
                    >
                        A Dashboard built for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">peak performance</span>.
                    </motion.h2>
                </div>

                {/* Dashboard Mockup Layout */}
                <motion.div
                    style={{ y: yImage }}
                    className="relative max-w-5xl mx-auto w-full rounded-2xl border border-white/10 bg-[#1e293b]/70 backdrop-blur-3xl shadow-2xl flex overflow-hidden aspect-[16/10] md:aspect-[16/9]"
                >
                    {/* Sidebar */}
                    <div className="w-64 bg-[#0f172a]/90 border-r border-white/5 p-6 flex-col hidden md:flex">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
                                <span className="font-bold">F</span>
                            </div>
                            <span className="font-semibold tracking-wide">FlowPilot</span>
                        </div>

                        <div className="space-y-2 flex-1">
                            {[
                                { icon: <LayoutDashboard size={18} />, label: "Overview", active: true },
                                { icon: <Activity size={18} />, label: "Analytics", active: false },
                                { icon: <Users size={18} />, label: "Team", active: false },
                                { icon: <FileText size={18} />, label: "Reports", active: false },
                            ].map((item, i) => (
                                <div key={i} className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition ${item.active ? 'bg-primary/20 text-primary font-medium' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                                    {item.icon}
                                    <span className="text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto border-t border-white/5 pt-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
                                    <img src="https://i.pravatar.cc/100?img=33" alt="user" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Alex Morgan</p>
                                    <p className="text-xs text-slate-400">Admin</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 p-8 overflow-hidden flex flex-col relative">
                        {/* Topbar */}
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-2xl font-bold">Overview</h3>
                            <div className="flex items-center gap-4">
                                <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300">
                                    <Bell size={20} />
                                </button>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm cursor-pointer">
                                    Last 30 Days <ChevronDown size={14} />
                                </div>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            {[
                                { title: "Total Revenue", val: "$45,231", trend: "+12.5%", color: "text-green-400" },
                                { title: "Active Users", val: "2,420", trend: "+5.2%", color: "text-green-400" },
                                { title: "Tasks Automated", val: "145k", trend: "+24%", color: "text-cyan-400" },
                                { title: "Bounce Rate", val: "12%", trend: "-2.1%", color: "text-green-400" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                                    <p className="text-slate-400 text-sm font-medium mb-2">{stat.title}</p>
                                    <div className="flex items-end justify-between">
                                        <p className="text-2xl font-bold">{stat.val}</p>
                                        <p className={`text-xs font-medium ${stat.color} bg-white/5 px-2 py-1 rounded-md`}>{stat.trend}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Chart Area */}
                        <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-6 relative flex flex-col">
                            <h4 className="font-semibold mb-6">Performance Matrix</h4>
                            <div className="flex-1 relative flex items-end justify-between gap-2 pb-6">
                                {/* Horizontal Guide Lines */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6 z-0">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <div key={i} className="w-full border-b border-white/5"></div>
                                    ))}
                                </div>

                                {/* Custom Bars */}
                                {[20, 40, 30, 70, 50, 80, 60, 100, 70, 90].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className="w-full max-w-[40px] bg-gradient-to-t from-primary/40 to-accent/80 rounded-t-md relative z-10 hover:brightness-125 cursor-pointer transition-all"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Floating Overlay Component created with framer-motion */}
                        <motion.div
                            style={{ y: y }}
                            className="absolute right-[-20px] top-[40%] w-64 bg-slate-800 border border-slate-700 rounded-2xl p-5 shadow-2xl z-20 hidden md:block"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 rounded-full bg-accent animate-ping"></div>
                                <h5 className="font-semibold">AI Insights Live</h5>
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                Your workflow automation completed 45 tasks in the last hour, saving an estimated 2 hours of manual work.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DashboardPreview;
