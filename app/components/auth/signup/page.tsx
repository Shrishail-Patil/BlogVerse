'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import styles from './Signup.module.css'

export default function Signup() {
  return (
    <div className="min-h-screen dark">
      <div className={styles.signup}>
      <div className="bg-transparent text-gray-100 min-h-screen flex flex-col justify-center items-center p-4 transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="bg-black rounded-lg shadow-xl px-9 pt-4 pb-9 drop-shadow-xl">
            <div className="flex justify-start items-center mb-8">
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-center">Join BlogVerse</h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" placeholder="John Doe" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" required />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" placeholder="••••••••" required />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Sign Up
              </Button>
            </form>
            <div className="mt-6 text-center">
              <span className="text-sm">Already have an account? </span>
              <Link href="./login" className="text-sm text-primary hover:underline">
                Log in
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  )
}