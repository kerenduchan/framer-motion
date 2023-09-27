import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Home() {
    return (
        <motion.div animate={{}} className="home container">
            <h2>Welcome to Pizza Joint</h2>
            <Link to="/base">
                <motion.button animate={{}}>Create Your Pizza</motion.button>
            </Link>
        </motion.div>
    )
}
