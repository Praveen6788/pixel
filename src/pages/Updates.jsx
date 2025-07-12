import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, User, Tag, Clock, Bell, Zap, Image as ImageIcon, Code } from 'lucide-react'

const Updates = () => {
  const [filter, setFilter] = useState('all')
  
  const updates = [
    {
      id: 1,
      title: 'Neural Network Pixel Generator Released',
      content: 'Our new AI-powered pixel art generator can create stunning artwork from simple text prompts. Experience the future of digital art creation.',
      author: 'CyberArtist_Prime',
      avatar: '🤖',
      date: '2025-07-12',
      time: '14:30',
      category: 'feature',
      tags: ['AI', 'Generator', 'Beta'],
      likes: 247,
      comments: 89
    },
    {
      id: 2,
      title: 'Community Gallery Overhaul',
      content: 'The gallery now features holographic previews, advanced filtering, and real-time collaboration tools. Dive into the new visual experience.',
      author: 'QuantumDesigner',
      avatar: '🎨',
      date: '2025-07-11',
      time: '09:15',
      category: 'update',
      tags: ['Gallery', 'UI/UX', 'Performance'],
      likes: 156,
      comments: 34
    },
    {
      id: 3,
      title: 'Neon Art Contest Winners Announced',
      content: 'Congratulations to all participants in our first Neon Dreams contest! Check out the winning submissions and get inspired for the next competition.',
      author: 'EventCoordinator_X',
      avatar: '🏆',
      date: '2025-07-10',
      time: '16:45',
      category: 'news',
      tags: ['Contest', 'Winners', 'Community'],
      likes: 423,
      comments: 167
    },
    {
      id: 4,
      title: 'Real-time Collaboration Beta',
      content: 'Work together with artists across the digital universe in real-time. Our new collaboration tools support multi-user pixel editing with live cursors.',
      author: 'TechArchitect_Neo',
      avatar: '⚡',
      date: '2025-07-09',
      time: '11:20',
      category: 'feature',
      tags: ['Collaboration', 'Real-time', 'Beta'],
      likes: 312,
      comments: 78
    },
    {
      id: 5,
      title: 'Mobile App Development Update',
      content: 'Our cyberpunk mobile experience is progressing rapidly. Expect native pixel art creation tools with haptic feedback and AR preview modes.',
      author: 'MobileTeam_Alpha',
      avatar: '📱',
      date: '2025-07-08',
      time: '13:00',
      category: 'development',
      tags: ['Mobile', 'AR', 'Development'],
      likes: 189,
      comments: 45
    }
  ]

  const categories = [
    { id: 'all', name: 'All Updates', icon: Bell, color: 'neon-blue' },
    { id: 'feature', name: 'Features', icon: Zap, color: 'neon-green' },
    { id: 'update', name: 'Updates', icon: Code, color: 'neon-pink' },
    { id: 'news', name: 'News', icon: ImageIcon, color: 'neon-purple' },
    { id: 'development', name: 'Development', icon: User, color: 'neon-blue' }
  ]

  const filteredUpdates = filter === 'all' 
    ? updates 
    : updates.filter(update => update.category === filter)

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-pixel neon-text mb-6">
            NEURAL UPDATES
          </h1>
          <p className="text-xl text-gray-300 font-cyber max-w-3xl mx-auto">
            Stay connected to the pulse of the digital realm. Real-time updates from the cyberpunk frontier.
          </p>
          
          {/* Digital Clock */}
          <motion.div
            className="mt-8 cyber-card inline-flex items-center gap-3 px-6 py-3"
            animate={{ 
              boxShadow: [
                '0 0 20px #00f5ff',
                '0 0 40px #00f5ff',
                '0 0 20px #00f5ff'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Clock className="neon-blue text-neon-blue" size={20} />
            <span className="font-pixel text-lg neon-text">
              {new Date().toLocaleTimeString('en-US', { 
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </span>
          </motion.div>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = filter === category.id
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg font-cyber transition-all duration-300 ${
                    isActive 
                      ? `cyber-card neon-${category.color.split('-')[1]}-text border-${category.color}` 
                      : 'bg-cyber-gray bg-opacity-50 text-gray-300 hover:bg-opacity-80'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                  {category.name}
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Updates Grid */}
        <motion.div 
          className="space-y-6"
          layout
        >
          {filteredUpdates.map((update, index) => (
            <motion.article
              key={update.id}
              className="hologram-card p-8 group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              layout
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-neon-gradient flex items-center justify-center text-2xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {update.avatar}
                  </motion.div>
                  
                  <div>
                    <h3 className="text-xl font-cyber neon-text mb-1">
                      {update.author}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(update.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {update.time}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {update.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-cyber bg-cyber-light rounded-full neon-green-text border border-neon-green border-opacity-30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <h2 className="text-2xl font-cyber neon-pink-text mb-4 group-hover:neon-text transition-colors">
                {update.title}
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-6 font-cyber">
                {update.content}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-cyber-light">
                <div className="flex items-center gap-6">
                  <motion.button
                    className="flex items-center gap-2 text-gray-400 hover:neon-pink-text transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-lg">💜</span>
                    <span className="font-cyber">{update.likes}</span>
                  </motion.button>
                  
                  <motion.button
                    className="flex items-center gap-2 text-gray-400 hover:neon-blue-text transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-lg">💬</span>
                    <span className="font-cyber">{update.comments}</span>
                  </motion.button>
                </div>
                
                <motion.button
                  className="flex items-center gap-2 text-gray-400 hover:neon-text transition-colors font-cyber"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <span>→</span>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-neon-gradient rounded-lg text-cyber-dark font-bold font-cyber transition-all duration-300 hover:scale-105"
            whileHover={{ boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Updates
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Updates
