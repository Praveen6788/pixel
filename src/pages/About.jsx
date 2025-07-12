import { motion } from 'framer-motion'
import { Camera, Users, Award, Target, MapPin, Calendar, Code, Heart } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Active Members', color: 'neon-blue' },
    { icon: Camera, value: '2K+', label: 'Photos Captured', color: 'neon-pink' },
    { icon: Award, value: '50+', label: 'Awards Won', color: 'neon-green' },
    { icon: Target, value: '100+', label: 'Events Hosted', color: 'neon-purple' }
  ]

  const values = [
    {
      icon: Camera,
      title: 'Visual Excellence',
      description: 'We strive to capture moments that tell compelling stories through the lens of creativity and technical mastery.',
      color: 'neon-blue'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a supportive environment where photographers of all levels can learn, grow, and inspire each other.',
      color: 'neon-pink'
    },
    {
      icon: Code,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and digital art forms to push the boundaries of traditional photography.',
      color: 'neon-green'
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'Every click, every frame, every pixel is driven by our collective passion for the art of photography.',
      color: 'neon-purple'
    }
  ]

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-pixel neon-text mb-6">
            ABOUT PIXEL
          </h1>
          <div className="w-24 h-1 bg-neon-gradient mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 font-cyber max-w-4xl mx-auto leading-relaxed">
            Where Digital Art Meets Traditional Photography in the Heart of Innovation
          </p>
        </motion.div>

        {/* Main Story */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-pixel neon-pink-text mb-6">
                OUR STORY
              </h2>
              <div className="space-y-4 text-gray-300 font-cyber leading-relaxed">
                <p>
                  <span className="neon-text font-bold">PIXEL</span> is the premier photography club of the <span className="neon-green-text font-bold">Institute of Aeronautical Engineering (IARE)</span>, where creativity meets technology in the most spectacular way possible.
                </p>
                <p>
                  Founded with a vision to revolutionize visual storytelling, we've created a cyberpunk haven where traditional photography techniques blend seamlessly with cutting-edge digital art forms. Our community thrives on the intersection of analog beauty and digital innovation.
                </p>
                <p>
                  From capturing the raw essence of campus life to creating mind-bending digital masterpieces, PIXEL has become the creative powerhouse that pushes the boundaries of what's possible with a camera and imagination.
                </p>
                <p>
                  We believe that every frame tells a story, every pixel holds potential, and every member brings a unique perspective that enriches our collective vision.
                </p>
              </div>
            </div>
            
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="hologram-card p-8 text-center">
                <motion.div
                  className="w-32 h-32 mx-auto mb-6 bg-neon-gradient rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Camera className="w-16 h-16 text-cyber-dark" />
                </motion.div>
                <h3 className="text-2xl font-pixel neon-text mb-4">IARE's Creative Hub</h3>
                <p className="text-gray-300 font-cyber">
                  Established as the official photography club of Institute of Aeronautical Engineering, 
                  fostering creativity and technical excellence since our inception.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-pixel neon-green-text text-center mb-12">
            BY THE NUMBERS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="cyber-card p-6 text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br from-${stat.color} to-transparent p-4 mx-auto mb-4 group-hover:animate-pulse-neon`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-3xl font-pixel neon-${stat.color.split('-')[1]}-text mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-cyber">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-pixel neon-purple-text text-center mb-12">
            OUR VALUES
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="hologram-card p-8 group"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br from-${value.color} to-transparent p-4 flex-shrink-0 group-hover:animate-pulse-neon`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-cyber neon-${value.color.split('-')[1]}-text mb-3`}>
                        {value.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Location & Contact */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-pixel neon-text mb-6">
              FIND US IN THE DIGITAL REALM
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 justify-center">
                <MapPin className="text-neon-pink" size={24} />
                <div className="text-left">
                  <div className="font-cyber neon-pink-text">Location</div>
                  <div className="text-gray-300 font-cyber">
                    Institute of Aeronautical Engineering<br />
                    Dundigal, Hyderabad
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center">
                <Calendar className="text-neon-blue" size={24} />
                <div className="text-left">
                  <div className="font-cyber neon-blue-text">Meetings</div>
                  <div className="text-gray-300 font-cyber">
                    Every Friday<br />
                    5:00 PM - 7:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="cyber-card p-12">
            <h2 className="text-3xl lg:text-5xl font-pixel neon-gradient bg-clip-text text-transparent mb-6">
              READY TO CAPTURE THE FUTURE?
            </h2>
            <p className="text-xl text-gray-300 font-cyber mb-8 max-w-2xl mx-auto">
              Join PIXEL and become part of IARE's most creative community. 
              Your journey into the world of digital artistry begins here.
            </p>
            <motion.button
              className="inline-flex items-center gap-3 px-10 py-5 bg-neon-gradient rounded-lg text-cyber-dark font-bold font-cyber text-lg transition-all duration-300 hover:shadow-2xl"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 245, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Community
              <Camera className="animate-pulse" />
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default About
