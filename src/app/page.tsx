'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-obsidian-900">
      {/* خلفية متحركة */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,184,0,0.15),transparent_50%)]" />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* الشعار والترحيب */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Core Vault
            </span>
          </h1>
          <p className="text-2xl text-gold-500/80 font-arabic">
            الملاذ الرقمي السيادي
          </p>
          <div className="w-24 h-1 bg-gold-500/30 mx-auto mt-8 rounded-full" />
        </motion.div>

        {/* بطاقات المميزات */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            icon="🔐"
            title="تشفير كامل"
            description="AES-256-GCM مع PBKDF2 - التشفير على جهازك قبل الرفع"
            delay={0.1}
          />
          <FeatureCard
            icon="🛡️"
            title="سيادة رقمية"
            description="لا أحد يطلع على ملفاتك - حتى نحن!"
            delay={0.2}
          />
          <FeatureCard
            icon="⚡"
            title="روابط مؤقتة"
            description="مشاركة آمنة بصلاحية محددة زمنياً"
            delay={0.3}
          />
        </div>

        {/* أزرار الدخول */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6 mt-16"
        >
          <Link
            href="/login"
            className="px-8 py-4 bg-gold-500 text-obsidian-900 rounded-xl font-bold hover:bg-gold-400 transition-all hover:scale-105 shadow-2xl shadow-gold-500/20"
          >
            دخول الخزنة
          </Link>
          <Link
            href="/register"
            className="px-8 py-4 border-2 border-gold-500/50 text-gold-500 rounded-xl font-bold hover:bg-gold-500/10 transition-all hover:scale-105"
          >
            إنشاء حساب
          </Link>
        </motion.div>

        {/* شعار الأمان */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-24 text-sm text-gray-500"
        >
          <p>Zero-Knowledge Architecture · Client-Side Encryption</p>
          <p className="mt-2">جميع الملفات مشفرة محلياً قبل المغادرة</p>
        </motion.div>
      </div>
    </main>
  )
}

function FeatureCard({ icon, title, description, delay }: {
  icon: string
  title: string
  description: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="vault-card p-8 text-center group hover:border-gold-500/40 transition-all"
    >
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gold-500 mb-3">
        {title}
      </h3>
      <p className="text-gray-400">
        {description}
      </p>
    </motion.div>
  )
}