import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Search, Filter, Grid, List, Heart, Eye, Download, Maximize, X, Play, Pause } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [viewMode, setViewMode] = useState('grid')
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)

  // Sample gallery data
  const artworks = [
    {
      id: 1,
      title: 'Neon City Nights',
      artist: 'CyberPixel_Master',
      image: 'https://via.placeholder.com/400x400/00f5ff/000000?text=Neon+City',
      likes: 342,
      views: 1205,
      category: 'landscape',
      tags: ['cyberpunk', 'city', 'neon'],
      description: 'A breathtaking view of the cyberpunk metropolis at midnight, with holographic advertisements reflecting in rain-soaked streets.'
    },
    {
      id: 2,
      title: 'Digital Dragon',
      artist: 'QuantumArtist',
      image: 'https://via.placeholder.com/400x400/ff007f/000000?text=Dragon',
      likes: 567,
      views: 2341,
      category: 'character',
      tags: ['dragon', 'fantasy', 'digital'],
      description: 'An ancient dragon reimagined in the digital realm, breathing pixels instead of fire.'
    },
    {
      id: 3,
      title: 'Holographic Garden',
      artist: 'NatureHacker',
      image: 'https://via.placeholder.com/400x400/39ff14/000000?text=Garden',
      likes: 289,
      views: 987,
      category: 'nature',
      tags: ['nature', 'hologram', 'peaceful'],
      description: 'Nature meets technology in this serene holographic garden where digital flowers bloom eternal.'
    },
    {
      id: 4,
      title: 'Space Station Alpha',
      artist: 'VoidExplorer',
      image: 'https://via.placeholder.com/400x400/bf00ff/000000?text=Station',
      likes: 445,
      views: 1567,
      category: 'sci-fi',
      tags: ['space', 'station', 'futuristic'],
      description: 'A massive space station orbiting a distant planet, humanity\'s beacon in the cosmic void.'
    },
    {
      id: 5,
      title: 'Robot Companion',
      artist: 'AIDesigner_Prime',
      image: 'https://via.placeholder.com/400x400/00f5ff/000000?text=Robot',
      likes: 623,
      views: 2890,
      category: 'character',
      tags: ['robot', 'AI', 'companion'],
      description: 'A friendly AI companion designed to assist humans in their daily cyberpunk adventures.'
    },
    {
      id: 6,
      title: 'Pixel Portal',
      artist: 'DimensionShifter',
      image: 'https://via.placeholder.com/400x400/ff007f/000000?text=Portal',
      likes: 378,
      views: 1432,
      category: 'abstract',
      tags: ['portal', 'dimensions', 'abstract'],
      description: 'A mystical portal connecting different digital dimensions, each pixel a gateway to infinite possibilities.'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Artworks', color: 'neon-blue' },
    { id: 'landscape', name: 'Landscapes', color: 'neon-green' },
    { id: 'character', name: 'Characters', color: 'neon-pink' },
    { id: 'sci-fi', name: 'Sci-Fi', color: 'neon-purple' },
    { id: 'nature', name: 'Nature', color: 'neon-green' },
    { id: 'abstract', name: 'Abstract', color: 'neon-blue' }
  ]

  const filteredArtworks = artworks.filter(artwork => {
    const matchesCategory = filter === 'all' || artwork.category === filter
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-pixel neon-text mb-6">
            HOLOGRAM GALLERY
          </h1>
          <p className="text-xl text-gray-300 font-cyber max-w-3xl mx-auto">
            Immerse yourself in a collection of pixel masterpieces from across the digital universe.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-blue" size={20} />
            <input
              type="text"
              placeholder="Search artworks, artists, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 cyber-card bg-transparent text-white placeholder-gray-400 font-cyber focus:outline-none focus:neon-border"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex gap-2">
            <motion.button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-lg transition-all duration-300 ${
                viewMode === 'grid' ? 'cyber-card neon-text' : 'bg-cyber-gray text-gray-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Grid size={20} />
            </motion.button>
            <motion.button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-lg transition-all duration-300 ${
                viewMode === 'list' ? 'cyber-card neon-text' : 'bg-cyber-gray text-gray-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <List size={20} />
            </motion.button>
          </div>

          {/* Music Control */}
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-4 py-3 cyber-card neon-pink-text font-cyber"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            Synth Music
          </motion.button>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-cyber transition-all duration-300 ${
                  filter === category.id
                    ? `cyber-card neon-${category.color.split('-')[1]}-text border-${category.color}`
                    : 'bg-cyber-gray bg-opacity-50 text-gray-300 hover:bg-opacity-80'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
          layout
        >
          {filteredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedImage(artwork)}
              layout
            >
              <div className="hologram-card overflow-hidden">
                {/* Image */}
                <div className="relative overflow-hidden aspect-square">
                  <motion.img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover pixel-art group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ filter: 'brightness(1.2)' }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="flex gap-2">
                        <motion.button
                          className="p-2 bg-cyber-gray bg-opacity-80 rounded-full text-neon-pink hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Heart size={16} />
                        </motion.button>
                        <motion.button
                          className="p-2 bg-cyber-gray bg-opacity-80 rounded-full text-neon-blue hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Download size={16} />
                        </motion.button>
                      </div>
                      <motion.button
                        className="p-2 bg-cyber-gray bg-opacity-80 rounded-full text-neon-green hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Maximize size={16} />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-cyber neon-text mb-2">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-400 font-cyber mb-4">
                    by {artwork.artist}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Heart size={14} className="text-neon-pink" />
                        {artwork.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={14} className="text-neon-blue" />
                        {artwork.views}
                      </div>
                    </div>
                    
                    <div className="flex gap-1">
                      {artwork.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-cyber-light rounded neon-green-text"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-cyber-dark bg-opacity-95 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              
              {/* Modal Content */}
              <motion.div
                className="relative max-w-4xl max-h-[90vh] bg-cyber-gray rounded-lg overflow-hidden cyber-card"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  className="absolute top-4 right-4 z-10 p-2 bg-cyber-dark bg-opacity-80 rounded-full text-white hover:neon-text transition-colors"
                  onClick={() => setSelectedImage(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>

                {/* Image */}
                <div className="relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto pixel-art"
                  />
                </div>

                {/* Details */}
                <div className="p-6">
                  <h2 className="text-3xl font-cyber neon-text mb-2">
                    {selectedImage.title}
                  </h2>
                  <p className="text-xl text-gray-300 font-cyber mb-4">
                    by {selectedImage.artist}
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {selectedImage.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Heart className="text-neon-pink" size={18} />
                        <span className="font-cyber">{selectedImage.likes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="text-neon-blue" size={18} />
                        <span className="font-cyber">{selectedImage.views}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {selectedImage.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-cyber-light rounded-full neon-green-text"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Gallery
