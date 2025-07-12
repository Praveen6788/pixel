import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const PixelArt = () => {
  const [activePixels, setActivePixels] = useState(new Set())

  // Create a grid of pixels that animate
  const gridSize = 20
  const pixels = Array.from({ length: gridSize * gridSize }, (_, i) => i)

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePixels(prev => {
        const newSet = new Set(prev)
        
        // Randomly add/remove pixels
        const randomPixel = Math.floor(Math.random() * pixels.length)
        if (newSet.has(randomPixel)) {
          newSet.delete(randomPixel)
        } else {
          newSet.add(randomPixel)
        }
        
        // Keep it interesting - limit to 30% of pixels
        if (newSet.size > pixels.length * 0.3) {
          const toRemove = Array.from(newSet)[0]
          newSet.delete(toRemove)
        }
        
        return newSet
      })
    }, 200)

    return () => clearInterval(interval)
  }, [pixels.length])

  const getPixelColor = (index) => {
    const colors = ['#FFD700', '#FFC107', '#000000', '#FFFFFF']
    return colors[index % colors.length]
  }

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main Pixel Grid */}
      <motion.div
        className="grid gap-1 p-8 modern-card rounded-2xl shadow-xl"
        style={{ 
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          aspectRatio: '1/1'
        }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        {pixels.map((pixel, index) => (
          <motion.div
            key={pixel}
            className={`aspect-square rounded-sm ${
              activePixels.has(pixel) ? 'opacity-100' : 'opacity-20'
            }`}
            style={{
              backgroundColor: activePixels.has(pixel) ? getPixelColor(index) : '#f5f5f5',
              boxShadow: activePixels.has(pixel) && getPixelColor(index) === '#FFD700'
                ? `0 0 10px ${getPixelColor(index)}` 
                : 'none'
            }}
            initial={{ scale: 0 }}
            animate={{ 
              scale: activePixels.has(pixel) ? 1 : 0.3,
              rotateZ: activePixels.has(pixel) ? 0 : 180
            }}
            transition={{ 
              duration: 0.3,
              type: 'spring',
              stiffness: 300
            }}
          />
        ))}
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              backgroundColor: getPixelColor(i),
              boxShadow: `0 0 10px ${getPixelColor(i)}`
            }}
            initial={{
              x: Math.random() * 400,
              y: Math.random() * 400,
            }}
            animate={{
              x: Math.random() * 400,
              y: Math.random() * 400,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Holographic Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-yellow-bright opacity-30"
        animate={{
          boxShadow: [
            '0 0 20px #FFD700',
            '0 0 40px #FFC107',
            '0 0 20px #FFD700'
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  )
}

export default PixelArt
