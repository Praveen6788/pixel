import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Users, Palette, Zap } from 'lucide-react'
import PixelArt from '../components/PixelArt'
import FloatingElements from '../components/FloatingElements'

const Home = () => {
  const features = [
    {
      icon: Palette,
      title: 'Pixel Creation',
      description: 'Advanced tools for creating stunning pixel art masterpieces',
      color: 'neon-blue'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with artists from around the digital universe',
      color: 'neon-pink'
    },
    {
      icon: Sparkles,
      title: 'AI Enhancement',
      description: 'AI-powered tools to enhance your creative workflow',
      color: 'neon-green'
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Stay connected with live notifications and updates',
      color: 'neon-purple'
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-dark-primary">
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-heading font-bold leading-tight"
            >
              <span className="text-white">WELCOME TO</span>
              <br />
              <span className="animated-gradient-text">PIXEL</span>
              <br />
              <span className="text-white">PHOTOGRAPHY</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-300 font-modern leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Join IARE's premier photography club where creativity meets innovation. 
              Capture, create, and connect with fellow visual storytellers in style.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                to="/gallery"
                className="group inline-flex items-center gap-3 dark-button-primary hover-lift"
              >
                Explore Gallery
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/updates"
                className="inline-flex items-center gap-3 dark-button-outline hover-lift"
              >
                Latest Updates
                <Sparkles className="animate-bounce-gentle" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated Pixel Art */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <PixelArt />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
              <span className="animated-gradient-text">DARK FEATURES</span>
            </h2>
            <p className="text-xl text-gray-300 font-modern max-w-3xl mx-auto">
              Experience cutting-edge photography tools with sleek dark aesthetics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  className="dark-card hover-lift p-6 group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br from-yellow-bright to-orange-400 p-4 mb-4 group-hover:animate-glow-pulse group-hover:scale-110 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-dark-primary" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-yellow-bright transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative bg-gradient-to-br from-dark-primary via-gray-900 to-dark-primary">
        <motion.div
          className="max-w-4xl mx-auto text-center glass-card p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            <span className="animated-gradient-text">READY TO CREATE?</span>
          </h2>
          <p className="text-xl text-gray-300 font-modern mb-8 max-w-2xl mx-auto">
            Join IARE's most creative photography community. 
            Your artistic journey starts here.
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileHover={{ scale: 1.02 }}
          >
            <Link
              to="/gallery"
              className="dark-button text-lg px-10 py-5 font-bold font-heading hover-lift group"
            >
              Start Creating
              <Zap className="ml-3 inline-block animate-glow-pulse group-hover:scale-110 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
