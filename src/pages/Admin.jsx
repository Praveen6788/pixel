import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Shield, Plus, Edit, Trash2, Upload, Image, Type, Tag, Calendar, Clock, Eye, EyeOff, Save, X, Camera, Users, Bell, Activity } from 'lucide-react'

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showNewPostForm, setShowNewPostForm] = useState(false)
  const [showNewPhotoForm, setShowNewPhotoForm] = useState(false)
  
  // Login state
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)

  // Form states
  const [newUpdate, setNewUpdate] = useState({
    title: '',
    content: '',
    category: 'update',
    tags: '',
    isPublic: true
  })

  const [newPhoto, setNewPhoto] = useState({
    title: '',
    description: '',
    category: 'event',
    tags: '',
    file: null
  })

  // Mock admin data
  const adminStats = [
    { icon: Users, label: 'Total Members', value: '547', color: 'neon-blue' },
    { icon: Camera, label: 'Photos Posted', value: '1,234', color: 'neon-pink' },
    { icon: Bell, label: 'Updates Posted', value: '89', color: 'neon-green' },
    { icon: Activity, label: 'Monthly Views', value: '12.4K', color: 'neon-purple' }
  ]

  const recentUpdates = [
    { id: 1, title: 'Neural Network Generator', date: '2025-07-12', views: 247, status: 'published' },
    { id: 2, title: 'Gallery Overhaul', date: '2025-07-11', views: 156, status: 'published' },
    { id: 3, title: 'Contest Winners', date: '2025-07-10', views: 423, status: 'published' },
    { id: 4, title: 'Draft: Mobile App Update', date: '2025-07-12', views: 0, status: 'draft' }
  ]

  const recentPhotos = [
    { id: 1, title: 'Cyberpunk Campus', date: '2025-07-12', likes: 89, category: 'campus' },
    { id: 2, title: 'Neon Workshop', date: '2025-07-11', likes: 156, category: 'event' },
    { id: 3, title: 'Team Portrait', date: '2025-07-10', likes: 203, category: 'team' },
    { id: 4, title: 'Digital Art Exhibition', date: '2025-07-09', likes: 145, category: 'exhibition' }
  ]

  const handleLogin = (e) => {
    e.preventDefault()
    // Simple mock authentication
    if (credentials.username === 'admin' && credentials.password === 'pixel2025') {
      setIsAuthenticated(true)
      setShowLoginForm(false)
    } else {
      alert('Invalid credentials! Use admin/pixel2025 for demo')
    }
  }

  const handleCreateUpdate = (e) => {
    e.preventDefault()
    // Mock create update
    console.log('Creating update:', newUpdate)
    setNewUpdate({ title: '', content: '', category: 'update', tags: '', isPublic: true })
    setShowNewPostForm(false)
    alert('Update created successfully!')
  }

  const handleUploadPhoto = (e) => {
    e.preventDefault()
    // Mock upload photo
    console.log('Uploading photo:', newPhoto)
    setNewPhoto({ title: '', description: '', category: 'event', tags: '', file: null })
    setShowNewPhotoForm(false)
    alert('Photo uploaded successfully!')
  }

  // Login Form Component
  const LoginForm = () => (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-md w-full">
        <motion.div
          className="hologram-card p-8"
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <motion.div
              className="w-20 h-20 bg-neon-gradient rounded-full flex items-center justify-center mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-10 h-10 text-cyber-dark" />
            </motion.div>
            <h1 className="text-3xl font-pixel neon-text mb-2">ADMIN ACCESS</h1>
            <p className="text-gray-400 font-cyber">Secure Portal to PIXEL Command Center</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-cyber neon-blue-text mb-2">
                Username
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full px-4 py-3 cyber-card bg-transparent text-white placeholder-gray-400 font-cyber focus:outline-none focus:neon-border"
                placeholder="Enter admin username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-cyber neon-pink-text mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="w-full px-4 py-3 pr-12 cyber-card bg-transparent text-white placeholder-gray-400 font-cyber focus:outline-none focus:neon-border"
                  placeholder="Enter admin password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:neon-text"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 bg-neon-gradient rounded-lg text-cyber-dark font-bold font-cyber text-lg transition-all duration-300"
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              ACCESS GRANTED
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 font-cyber">
              Demo credentials: admin / pixel2025
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )

  // Main Admin Dashboard
  const AdminDashboard = () => (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="text-4xl font-pixel neon-text mb-2">ADMIN DASHBOARD</h1>
            <p className="text-gray-400 font-cyber">Welcome back, Commander</p>
          </div>
          <motion.button
            onClick={() => setIsAuthenticated(false)}
            className="px-6 py-3 cyber-card text-gray-400 hover:neon-pink-text font-cyber transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Logout
          </motion.button>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          className="flex gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {[
            { id: 'dashboard', name: 'Dashboard', icon: Activity },
            { id: 'updates', name: 'Manage Updates', icon: Bell },
            { id: 'photos', name: 'Manage Photos', icon: Camera }
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-cyber transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'cyber-card neon-text' 
                    : 'bg-cyber-gray text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon size={18} />
                {tab.name}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Dashboard Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Stats Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {adminStats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      className="cyber-card p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${stat.color} to-transparent p-3`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className={`text-2xl font-pixel neon-${stat.color.split('-')[1]}-text`}>
                            {stat.value}
                          </div>
                          <div className="text-gray-400 text-sm font-cyber">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Recent Activity */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="hologram-card p-6">
                  <h3 className="text-xl font-cyber neon-pink-text mb-4">Recent Updates</h3>
                  <div className="space-y-3">
                    {recentUpdates.slice(0, 4).map((update) => (
                      <div key={update.id} className="flex justify-between items-center p-3 cyber-card">
                        <div>
                          <div className="font-cyber text-white">{update.title}</div>
                          <div className="text-sm text-gray-400">{update.date}</div>
                        </div>
                        <div className={`px-2 py-1 rounded text-xs ${
                          update.status === 'published' ? 'neon-green-text' : 'text-yellow-400'
                        }`}>
                          {update.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hologram-card p-6">
                  <h3 className="text-xl font-cyber neon-blue-text mb-4">Recent Photos</h3>
                  <div className="space-y-3">
                    {recentPhotos.slice(0, 4).map((photo) => (
                      <div key={photo.id} className="flex justify-between items-center p-3 cyber-card">
                        <div>
                          <div className="font-cyber text-white">{photo.title}</div>
                          <div className="text-sm text-gray-400">{photo.category} • {photo.date}</div>
                        </div>
                        <div className="text-neon-pink font-cyber">
                          ♥ {photo.likes}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Updates Management */}
          {activeTab === 'updates' && (
            <motion.div
              key="updates"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-cyber neon-pink-text">Manage Updates</h2>
                <motion.button
                  onClick={() => setShowNewPostForm(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-neon-gradient rounded-lg text-cyber-dark font-bold font-cyber"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Plus size={18} />
                  New Update
                </motion.button>
              </div>

              <div className="space-y-4">
                {recentUpdates.map((update) => (
                  <div key={update.id} className="hologram-card p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-cyber neon-text mb-2">{update.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{update.date}</span>
                          <span>👀 {update.views} views</span>
                          <span className={`px-2 py-1 rounded ${
                            update.status === 'published' ? 'neon-green-text' : 'text-yellow-400'
                          }`}>
                            {update.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <motion.button
                          className="p-2 cyber-card text-neon-blue hover:text-white"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Edit size={16} />
                        </motion.button>
                        <motion.button
                          className="p-2 cyber-card text-neon-pink hover:text-white"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Trash2 size={16} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Photos Management */}
          {activeTab === 'photos' && (
            <motion.div
              key="photos"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-cyber neon-blue-text">Manage Photos</h2>
                <motion.button
                  onClick={() => setShowNewPhotoForm(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-neon-gradient rounded-lg text-cyber-dark font-bold font-cyber"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Upload size={18} />
                  Upload Photo
                </motion.button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPhotos.map((photo) => (
                  <div key={photo.id} className="hologram-card p-4">
                    <div className="aspect-square bg-cyber-gray rounded-lg mb-4 flex items-center justify-center">
                      <Camera className="text-gray-500" size={40} />
                    </div>
                    <h3 className="font-cyber neon-text mb-2">{photo.title}</h3>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span>{photo.category}</span>
                      <span>♥ {photo.likes}</span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <motion.button
                        className="flex-1 py-2 cyber-card text-neon-blue hover:text-white text-sm font-cyber"
                        whileHover={{ scale: 1.02 }}
                      >
                        Edit
                      </motion.button>
                      <motion.button
                        className="flex-1 py-2 cyber-card text-neon-pink hover:text-white text-sm font-cyber"
                        whileHover={{ scale: 1.02 }}
                      >
                        Delete
                      </motion.button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* New Update Modal */}
        <AnimatePresence>
          {showNewPostForm && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-cyber-dark bg-opacity-95 backdrop-blur-sm" onClick={() => setShowNewPostForm(false)} />
              <motion.div
                className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto cyber-card p-8"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-cyber neon-text">Create New Update</h2>
                  <button onClick={() => setShowNewPostForm(false)}>
                    <X className="text-gray-400 hover:text-white" size={24} />
                  </button>
                </div>

                <form onSubmit={handleCreateUpdate} className="space-y-6">
                  <div>
                    <label className="block text-sm font-cyber neon-blue-text mb-2">Title</label>
                    <input
                      type="text"
                      value={newUpdate.title}
                      onChange={(e) => setNewUpdate({...newUpdate, title: e.target.value})}
                      className="w-full px-4 py-3 cyber-card bg-transparent text-white font-cyber focus:outline-none focus:neon-border"
                      placeholder="Enter update title..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-cyber neon-pink-text mb-2">Content</label>
                    <textarea
                      value={newUpdate.content}
                      onChange={(e) => setNewUpdate({...newUpdate, content: e.target.value})}
                      className="w-full px-4 py-3 cyber-card bg-transparent text-white font-cyber focus:outline-none focus:neon-border h-32 resize-none"
                      placeholder="Write your update content..."
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-cyber neon-green-text mb-2">Category</label>
                      <select
                        value={newUpdate.category}
                        onChange={(e) => setNewUpdate({...newUpdate, category: e.target.value})}
                        className="w-full px-4 py-3 cyber-card bg-cyber-dark text-white font-cyber focus:outline-none focus:neon-border"
                      >
                        <option value="update">Update</option>
                        <option value="feature">Feature</option>
                        <option value="news">News</option>
                        <option value="development">Development</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-cyber neon-purple-text mb-2">Tags</label>
                      <input
                        type="text"
                        value={newUpdate.tags}
                        onChange={(e) => setNewUpdate({...newUpdate, tags: e.target.value})}
                        className="w-full px-4 py-3 cyber-card bg-transparent text-white font-cyber focus:outline-none focus:neon-border"
                        placeholder="tag1, tag2, tag3"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="isPublic"
                      checked={newUpdate.isPublic}
                      onChange={(e) => setNewUpdate({...newUpdate, isPublic: e.target.checked})}
                      className="w-4 h-4"
                    />
                    <label htmlFor="isPublic" className="font-cyber text-gray-300">
                      Publish immediately
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <motion.button
                      type="submit"
                      className="flex-1 py-3 bg-neon-gradient rounded-lg text-cyber-dark font-bold font-cyber"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Create Update
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={() => setShowNewPostForm(false)}
                      className="px-6 py-3 cyber-card text-gray-400 hover:text-white font-cyber"
                      whileHover={{ scale: 1.02 }}
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Upload Photo Modal */}
        <AnimatePresence>
          {showNewPhotoForm && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-cyber-dark bg-opacity-95 backdrop-blur-sm" onClick={() => setShowNewPhotoForm(false)} />
              <motion.div
                className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto cyber-card p-8"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-cyber neon-text">Upload New Photo</h2>
                  <button onClick={() => setShowNewPhotoForm(false)}>
                    <X className="text-gray-400 hover:text-white" size={24} />
                  </button>
                </div>

                <form onSubmit={handleUploadPhoto} className="space-y-6">
                  <div>
                    <label className="block text-sm font-cyber neon-blue-text mb-2">Photo File</label>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-neon-blue transition-colors">
                      <Upload className="mx-auto text-gray-400 mb-4" size={40} />
                      <p className="text-gray-400 font-cyber mb-2">Drag and drop your photo here</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setNewPhoto({...newPhoto, file: e.target.files[0]})}
                        className="hidden"
                        id="photo-upload"
                      />
                      <label htmlFor="photo-upload" className="inline-block px-6 py-2 cyber-card text-neon-text font-cyber cursor-pointer hover:bg-opacity-80">
                        Choose File
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-cyber neon-pink-text mb-2">Title</label>
                    <input
                      type="text"
                      value={newPhoto.title}
                      onChange={(e) => setNewPhoto({...newPhoto, title: e.target.value})}
                      className="w-full px-4 py-3 cyber-card bg-transparent text-white font-cyber focus:outline-none focus:neon-border"
                      placeholder="Enter photo title..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-cyber neon-green-text mb-2">Description</label>
                    <textarea
                      value={newPhoto.description}
                      onChange={(e) => setNewPhoto({...newPhoto, description: e.target.value})}
                      className="w-full px-4 py-3 cyber-card bg-transparent text-white font-cyber focus:outline-none focus:neon-border h-24 resize-none"
                      placeholder="Describe your photo..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-cyber neon-purple-text mb-2">Category</label>
                      <select
                        value={newPhoto.category}
                        onChange={(e) => setNewPhoto({...newPhoto, category: e.target.value})}
                        className="w-full px-4 py-3 cyber-card bg-cyber-dark text-white font-cyber focus:outline-none focus:neon-border"
                      >
                        <option value="event">Event</option>
                        <option value="campus">Campus</option>
                        <option value="team">Team</option>
                        <option value="exhibition">Exhibition</option>
                        <option value="workshop">Workshop</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-cyber neon-blue-text mb-2">Tags</label>
                      <input
                        type="text"
                        value={newPhoto.tags}
                        onChange={(e) => setNewPhoto({...newPhoto, tags: e.target.value})}
                        className="w-full px-4 py-3 cyber-card bg-transparent text-white font-cyber focus:outline-none focus:neon-border"
                        placeholder="tag1, tag2, tag3"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.button
                      type="submit"
                      className="flex-1 py-3 bg-neon-gradient rounded-lg text-cyber-dark font-bold font-cyber"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Upload Photo
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={() => setShowNewPhotoForm(false)}
                      className="px-6 py-3 cyber-card text-gray-400 hover:text-white font-cyber"
                      whileHover={{ scale: 1.02 }}
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )

  return isAuthenticated ? <AdminDashboard /> : <LoginForm />
}

export default Admin
