import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const progressRef = useRef(0);

  const fullText = "Pensar bem é sábio, planejar bem é mais sábio e executar bem é o mais sábio.";

  useEffect(() => {
    // Atualização muito suave usando RAF para interpolação natural
    let startTime = Date.now();
    const duration = 6000; // 6 segundos

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      let newProgress = (elapsed / duration) * 100;

      // Easing function suave (ease-out)
      newProgress = 100 * (1 - Math.pow(1 - Math.min(newProgress, 100) / 100, 3));

      progressRef.current = Math.min(newProgress, 100);
      setProgress(progressRef.current);

      if (progressRef.current < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        // Completar carregamento
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    };

    requestAnimationFrame(updateProgress);

    return () => {};
  }, [onComplete]);

  // Animar o texto de forma progressiva
  useEffect(() => {
    if (progress >= 70) {
      setDisplayedText(fullText);
    } else if (progress >= 10) {
      const textProgress = (progress - 10) / 60;
      const charCount = Math.floor(fullText.length * textProgress);
      setDisplayedText(fullText.substring(0, charCount));
    }
  }, [progress]);

  const circumference = 2 * Math.PI * 110;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-gradient-to-br from-[#0a0603] via-[#0f0a08] to-[#1a0f15] flex flex-col items-center justify-center z-[10000] overflow-hidden"
    >
      {/* Efeito de fundo adicional */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-gradient-radial from-transparent to-black" />

      {/* Container com a foto e círculo de progresso */}
      <div className="relative w-80 h-80 flex items-center justify-center mb-16">
        {/* Círculo de fundo com glow suave */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-tech/25 to-purple-600/25 blur-3xl" />

        {/* SVG do círculo de progresso - com transição CSS suave */}
        <svg
          className="absolute w-full h-full drop-shadow-2xl"
          style={{ transform: 'rotate(-90deg)' }}
          role="progressbar"
          aria-valuenow={Math.floor(progress)}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {/* Círculo de fundo */}
          <circle
            cx="160"
            cy="160"
            r="110"
            fill="none"
            stroke="rgba(255, 107, 53, 0.1)"
            strokeWidth="2"
          />

          {/* Círculo de progresso com gradiente */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b35" stopOpacity="1" />
              <stop offset="50%" stopColor="#ff6b35" stopOpacity="1" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle
            cx="160"
            cy="160"
            r="110"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            filter="url(#glow)"
            style={{
              filter: 'drop-shadow(0 0 12px rgba(255, 107, 53, 0.7))',
              transition: 'stroke-dashoffset 0.05s linear',
            }}
          />
        </svg>

        {/* Foto do usuário - com filtro melhorado */}
        <motion.img
          src="/images/profile.jpg"
          alt="Gabriel Silvano"
          className="w-72 h-72 rounded-full object-cover border-4 border-orange-tech shadow-2xl"
          style={{
            boxShadow:
              '0 0 60px rgba(255, 107, 53, 0.6), 0 0 120px rgba(124, 58, 237, 0.3), inset 0 0 30px rgba(255, 107, 53, 0.15)',
          }}
          initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>

      {/* Frase motivacional */}
      <motion.div
        className="text-center max-w-3xl px-8 mb-8 h-32 flex items-center justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: displayedText ? 1 : 0, y: displayedText ? 0 : 10 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-2xl md:text-3xl text-gray-200 italic leading-relaxed font-light tracking-wide">
          "{displayedText}"
        </p>
      </motion.div>

      {/* Autor */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: displayedText === fullText ? 1 : 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p className="text-base md:text-lg text-orange-tech font-semibold tracking-wide">
          — Provérbio Árabe
        </p>
      </motion.div>

      {/* Barra de progresso - suave */}
      <motion.div
        className="absolute bottom-20 w-64 h-1.5 bg-gray-800/60 rounded-full overflow-hidden border border-gray-700/40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div
          className="h-full bg-gradient-to-r from-orange-tech via-orange-tech to-purple-600"
          style={{
            width: `${progress}%`,
            transition: 'width 0.05s linear',
          }}
        />
      </motion.div>

      {/* Indicador de progresso */}
      <motion.div
        className="absolute top-8 right-8 text-xs font-light text-gray-400 tracking-widest"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {Math.floor(progress)}%
      </motion.div>
    </motion.div>
  );
}
