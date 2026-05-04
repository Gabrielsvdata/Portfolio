import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import Button from './common/Button'
import Badge from './common/Badge'
import SocialLink from './common/SocialLink'
import CodeBackground from './CodeBackground'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 md:pt-0 px-4 md:px-8 bg-bg-dark overflow-hidden relative">
      <CodeBackground />
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT SIDE - TEXT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center space-y-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <Badge variant="primary">👨‍💻 Developer</Badge>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Gabriel <br />
              <span className="gradient-text">Silvano</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl text-orange-tech font-semibold">
              Desenvolvedor Backend
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-text max-w-lg leading-relaxed"
          >
            Faço backend com Node.js, Python e IA. Gosto de resolver problemas de verdade e entregar código que funciona bem em produção.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button size="lg" variant="primary" className="flex items-center justify-center gap-2">
              Ver Projetos
              <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="secondary">
              Entrar em Contato
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex gap-6 pt-4"
          >
            <SocialLink icon={Github} url="https://github.com" name="GitHub" />
            <SocialLink icon={Linkedin} url="https://linkedin.com" name="LinkedIn" />
            <SocialLink icon={Mail} url="mailto:gabriel@example.com" name="Email" />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Background Gradient Circle */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-blue via-primary-purple to-orange-tech opacity-20 blur-3xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            {/* Image Container */}
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-orange-tech shadow-glow-orange"
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="/images/EUnovo.png"
                alt="Gabriel Silvano - Desenvolvedor Backend"
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/30 to-transparent" />
            </motion.div>

            {/* Available Badge */}
            <motion.div
              className="absolute bottom-8 right-0 bg-orange-tech text-white px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-20 h-20 bg-primary-purple rounded-full opacity-20 blur-2xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-24 h-24 bg-orange-tech rounded-full opacity-20 blur-2xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
