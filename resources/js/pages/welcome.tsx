import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { 
  CheckCircle, 
  BarChart3, 
  Users, 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  ArrowRight,
  Star,
  Mail,
  Bell,
  FileText,
  Settings,
  Eye,
  Sparkles,
  TrendingUp,
  Lock,
  Download,
  Palette,
  Clock,
  Check
} from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    const features = [
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Multiple Question Types",
            description: "Create surveys with text, radio buttons, checkboxes, dropdowns, email, number, and date inputs.",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Real-time Analytics",
            description: "Get instant insights with detailed analytics and response visualizations.",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Public Sharing",
            description: "Share surveys with anyone using unique, secure links that work on any device.",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            icon: <Bell className="w-8 h-8" />,
            title: "Smart Notifications",
            description: "Get notified when someone responds to your survey or when it's completed.",
            gradient: "from-orange-500 to-red-500"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Secure & Private",
            description: "Your data is protected with industry-standard security and privacy measures.",
            gradient: "from-indigo-500 to-blue-500"
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Mobile Responsive",
            description: "Surveys look great and work perfectly on desktop, tablet, and mobile devices.",
            gradient: "from-teal-500 to-cyan-500"
        }
    ];

    const benefits = [
        { icon: <Sparkles className="w-5 h-5" />, text: "Create unlimited surveys" },
        { icon: <TrendingUp className="w-5 h-5" />, text: "Collect responses in real-time" },
        { icon: <Download className="w-5 h-5" />, text: "Export data to CSV" },
        { icon: <Palette className="w-5 h-5" />, text: "Custom branding options" },
        { icon: <BarChart3 className="w-5 h-5" />, text: "Advanced analytics dashboard" },
        { icon: <Mail className="w-5 h-5" />, text: "Email notifications" },
        { icon: <Clock className="w-5 h-5" />, text: "24/7 availability" },
        { icon: <Check className="w-5 h-5" />, text: "No technical knowledge required" }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Marketing Manager",
            content: "QuickForm has revolutionized how we collect customer feedback. The analytics are incredible!",
            rating: 5,
            avatar: "SJ"
        },
        {
            name: "Michael Chen",
            role: "Research Director",
            content: "The ease of creating and sharing surveys has made our research process so much more efficient.",
            rating: 5,
            avatar: "MC"
        },
        {
            name: "Emily Rodriguez",
            role: "Event Coordinator",
            content: "Perfect for event planning! The real-time notifications help us stay on top of responses.",
            rating: 5,
            avatar: "ER"
        }
    ];

    return (
        <>
            <Head title="QuickForm - Create Beautiful Surveys in Minutes">
                <meta name="description" content="Create professional surveys, collect responses, and analyze data with QuickForm. The easiest way to gather insights from your audience." />
            </Head>

            {/* Navigation */}
            <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                                    QuickForm
                                </h1>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route('admin.dashboard')}
                                    className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-primary to-purple-600 rounded-xl hover:from-primary/90 hover:to-purple-600/90 transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-primary to-purple-600 rounded-xl hover:from-primary/90 hover:to-purple-600/90 transition-all duration-200 shadow-lg hover:shadow-xl"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-32">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 mb-8">
                            <Sparkles className="w-4 h-4 text-primary mr-2" />
                            <span className="text-sm font-medium text-gray-700">The easiest way to create surveys</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            Create Beautiful Surveys
                            <span className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                in Minutes
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                            QuickForm makes it easy to create professional surveys, collect responses, 
                            and analyze data. No technical knowledge required.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                            {auth.user ? (
                                <Link
                                    href={route('admin.dashboard')}
                                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-purple-600 rounded-2xl hover:from-primary/90 hover:to-purple-600/90 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                                >
                                    Go to Dashboard
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('register')}
                                        className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-purple-600 rounded-2xl hover:from-primary/90 hover:to-purple-600/90 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                                    >
                                        Start Creating Surveys
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                    <Link
                                        href="#features"
                                        className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        Learn More
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
                                <div className="text-gray-600">Surveys Created</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
                                <div className="text-gray-600">Responses Collected</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
                                <div className="text-gray-600">Uptime</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Everything You Need to Create
                            <span className="block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                                Amazing Surveys
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Powerful features designed to make survey creation simple and response collection effective.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 text-white shadow-lg`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                                Why Choose
                                <span className="block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                                    QuickForm?
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                                Join thousands of users who trust QuickForm for their survey needs. 
                                From simple feedback forms to complex research studies, we've got you covered.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center space-x-4 group">
                                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-200">
                                            {benefit.icon}
                                        </div>
                                        <span className="text-gray-700 font-medium">{benefit.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl blur-xl"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Create your first survey in minutes. No credit card required.
                                </p>
                                {auth.user ? (
                                    <Link 
                                        href={route('admin.dashboard')} 
                                        className="inline-flex items-center justify-center w-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-purple-600 rounded-2xl hover:from-primary/90 hover:to-purple-600/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        Go to Dashboard
                                    </Link>
                                ) : (
                                    <Link 
                                        href={route('register')} 
                                        className="inline-flex items-center justify-center w-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-purple-600 rounded-2xl hover:from-primary/90 hover:to-purple-600/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        Create Free Account
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Loved by
                            <span className="block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                                Survey Creators
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            See what our users have to say about QuickForm
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                    <div className="flex mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">"{testimonial.content}"</p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gradient-to-br from-primary via-purple-600 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Create Your First Survey?
                    </h2>
                    <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto">
                        Join thousands of users who are already creating amazing surveys with QuickForm.
                    </p>
                    {auth.user ? (
                        <Link 
                            href={route('admin.dashboard')} 
                            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary bg-white rounded-2xl hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Go to Dashboard
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    ) : (
                        <Link 
                            href={route('register')} 
                            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary bg-white rounded-2xl hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Get Started Free
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    )}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
                                QuickForm
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                The easiest way to create professional surveys and collect responses.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-6 text-lg">Product</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#features" className="hover:text-white transition-colors duration-200">Features</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200">Templates</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200">API</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-6 text-lg">Support</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200">Documentation</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200">Status</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-6 text-lg">Company</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors duration-200">About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 QuickForm. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
