import { useState } from 'react'
import { motion } from 'framer-motion'

function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => setCount(prev => prev + 1)
  const handleDecrement = () => setCount(prev => prev - 1)
  const handleClear = () => setCount(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#272727]">
      <motion.div
        className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-xs border border-gray-600/20"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h1 className="text-2xl font-bold mb-4 text-white tracking-wide">COUNTER</h1>
        <motion.span
          className="text-4xl font-mono mb-6 text-white"
          key={count}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {count}
        </motion.span>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-2">
            <motion.button
              className="flex-1 bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg backdrop-blur-sm shadow-md transition-all duration-300"
              onClick={handleIncrement}
              whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              +1
            </motion.button>
            <motion.button
              className="flex-1 bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg backdrop-blur-sm shadow-md transition-all duration-300"
              onClick={handleDecrement}
              whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              -1
            </motion.button>
          </div>
          <motion.button
            className="w-full bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg backdrop-blur-sm shadow-md transition-all duration-300"
            onClick={handleClear}
            whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            Clear
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default Counter