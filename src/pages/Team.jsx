import { motion } from 'framer-motion'
import { Camera, Instagram, Twitter, Linkedin, Mail, Award, Zap } from 'lucide-react'

const Team = () => {
  const leadership = [
    {
      name: 'Alex Chen',
      role: 'President',
      avatar: '👨‍💻',
      specialty: 'Digital Art Director',
      bio: 'Leading PIXEL\'s transformation into the cyberpunk photography frontier. Specializes in futuristic portrait photography and holographic effects.',
      achievements: ['National Photography Award 2024', 'IARE Excellence Award', 'Digital Art Innovation Prize'],
      social: {
        instagram: '@alexchen_pixel',
        twitter: '@alexchen_photo',
        linkedin: 'alex-chen-photography',
        email: 'alex.chen@pixel.iare'
      },
      joinedYear: '2022',
      photosContributed: 450
    },
    {
      name: 'Maya Patel',
      role: 'Vice President',
      avatar: '👩‍🎨',
      specialty: 'Neon Photography',
      bio: 'Master of neon-lit street photography and cyberpunk aesthetics. Transforms ordinary moments into extraordinary digital experiences.',
      achievements: ['Best Campus Photographer 2024', 'Cyberpunk Art Exhibition', 'Tech Photography Pioneer'],
      social: {
        instagram: '@maya_neon_shots',
        twitter: '@mayapatel_px',
        linkedin: 'maya-patel-photography',
        email: 'maya.patel@pixel.iare'
      },
      joinedYear: '2022',
      photosContributed: 380
    },
    {
      name: 'Rahul Kumar',
      role: 'Technical Lead',
      avatar: '👨‍💼',
      specialty: 'AI Photography',
      bio: 'Pioneering the integration of AI and traditional photography. Develops cutting-edge tools for the PIXEL community.',
      achievements: ['Tech Innovation Award', 'AI Photography Pioneer', 'IARE Tech Excellence'],
      social: {
        instagram: '@rahul_ai_shots',
        twitter: '@rahulkumar_tech',
        linkedin: 'rahul-kumar-tech-photo',
        email: 'rahul.kumar@pixel.iare'
      },
      joinedYear: '2023',
      photosContributed: 320
    }
  ]

  const coreTeam = [
    {
      name: 'Priya Sharma',
      role: 'Creative Director',
      avatar: '👩‍🚀',
      specialty: 'Conceptual Art',
      bio: 'Crafting visual narratives that blur the lines between reality and digital dreams.',
      social: { instagram: '@priya_concepts', email: 'priya.sharma@pixel.iare' },
      joinedYear: '2023',
      photosContributed: 280
    },
    {
      name: 'Arjun Singh',
      role: 'Event Coordinator',
      avatar: '👨‍🎯',
      specialty: 'Event Photography',
      bio: 'Capturing the energy and excitement of every PIXEL event with cyberpunk flair.',
      social: { instagram: '@arjun_events', email: 'arjun.singh@pixel.iare' },
      joinedYear: '2023',
      photosContributed: 350
    },
    {
      name: 'Sneha Reddy',
      role: 'Social Media Lead',
      avatar: '👩‍💻',
      specialty: 'Digital Marketing',
      bio: 'Amplifying PIXEL\'s voice across the digital universe with engaging content.',
      social: { instagram: '@sneha_digital', email: 'sneha.reddy@pixel.iare' },
      joinedYear: '2023',
      photosContributed: 200
    },
    {
      name: 'Vikram Desai',
      role: 'Workshop Lead',
      avatar: '👨‍🏫',
      specialty: 'Photography Education',
      bio: 'Teaching the next generation of digital artists and cyberpunk photographers.',
      social: { instagram: '@vikram_teaches', email: 'vikram.desai@pixel.iare' },
      joinedYear: '2024',
      photosContributed: 150
    },
    {
      name: 'Aisha Khan',
      role: 'Equipment Manager',
      avatar: '👩‍🔧',
      specialty: 'Tech Specialist',
      bio: 'Maintaining and upgrading PIXEL\'s arsenal of futuristic photography equipment.',
      social: { instagram: '@aisha_tech', email: 'aisha.khan@pixel.iare' },
      joinedYear: '2024',
      photosContributed: 120
    },
    {
      name: 'Dev Patel',
      role: 'Web Developer',
      avatar: '👨‍💻',
      specialty: 'Full Stack Development',
      bio: 'Building the digital infrastructure that powers PIXEL\'s cyberpunk platform.',
      social: { instagram: '@dev_codes', email: 'dev.patel@pixel.iare' },
      joinedYear: '2024',
      photosContributed: 90
    }
  ]

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'instagram': return Instagram
      case 'twitter': return Twitter
      case 'linkedin': return Linkedin
      case 'email': return Mail
      default: return Mail
    }
  }

  const MemberCard = ({ member, isLeadership = false }) => (
    <motion.div
      className={`hologram-card p-6 group ${isLeadership ? 'lg:p-8' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -5 }}
      viewport={{ once: true }}
    >
      {/* Avatar & Basic Info */}
      <div className="text-center mb-6">
        <motion.div
          className={`${isLeadership ? 'w-24 h-24' : 'w-20 h-20'} mx-auto mb-4 bg-neon-gradient rounded-full flex items-center justify-center text-4xl`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {member.avatar}
        </motion.div>
        
        <h3 className={`${isLeadership ? 'text-2xl' : 'text-xl'} font-cyber neon-text mb-2`}>
          {member.name}
        </h3>
        
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="neon-pink-text font-cyber text-sm">{member.role}</span>
          {isLeadership && <Award className="text-neon-green" size={16} />}
        </div>
        
        <span className="text-gray-400 text-sm font-cyber">{member.specialty}</span>
      </div>

      {/* Bio */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6 text-center">
        {member.bio}
      </p>

      {/* Achievements (Leadership only) */}
      {isLeadership && member.achievements && (
        <div className="mb-6">
          <h4 className="neon-green-text font-cyber text-sm mb-3 text-center">ACHIEVEMENTS</h4>
          <div className="space-y-2">
            {member.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-gray-400">
                <Zap className="text-neon-blue" size={12} />
                {achievement}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6 text-center">
        <div className="cyber-card p-3">
          <div className="neon-blue-text font-cyber text-lg">{member.joinedYear}</div>
          <div className="text-gray-400 text-xs">JOINED</div>
        </div>
        <div className="cyber-card p-3">
          <div className="neon-pink-text font-cyber text-lg">{member.photosContributed}</div>
          <div className="text-gray-400 text-xs">PHOTOS</div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-3">
        {Object.entries(member.social).map(([platform, handle]) => {
          const Icon = getSocialIcon(platform)
          return (
            <motion.button
              key={platform}
              className="p-2 cyber-card text-gray-400 hover:neon-text transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={handle}
            >
              <Icon size={16} />
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-pixel neon-text mb-6">
            TEAM MEMBERS
          </h1>
          <div className="w-24 h-1 bg-neon-gradient mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 font-cyber max-w-3xl mx-auto">
            Meet the cyberpunk visionaries powering PIXEL's creative revolution at IARE
          </p>
        </motion.div>

        {/* Leadership Team */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-pixel neon-pink-text text-center mb-12">
            LEADERSHIP COUNCIL
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <MemberCard member={member} isLeadership={true} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Core Team */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-pixel neon-green-text text-center mb-12">
            CORE TEAM
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <MemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Join Team CTA */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="cyber-card p-12">
            <h2 className="text-3xl lg:text-5xl font-pixel neon-purple-text mb-6">
              BECOME A PIXEL PIONEER
            </h2>
            <p className="text-xl text-gray-300 font-cyber mb-8 max-w-2xl mx-auto">
              Ready to join IARE's most innovative photography community? 
              Become part of the cyberpunk creative revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="inline-flex items-center gap-3 px-8 py-4 bg-neon-gradient rounded-lg text-cyber-dark font-bold font-cyber transition-all duration-300 hover:shadow-2xl"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 245, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Join PIXEL
                <Camera className="animate-pulse" />
              </motion.button>
              
              <motion.button
                className="inline-flex items-center gap-3 px-8 py-4 cyber-card neon-text hover:neon-pink-text transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
                <Mail />
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Team
