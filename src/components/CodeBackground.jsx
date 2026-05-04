import { motion } from 'framer-motion'

export default function CodeBackground() {
  const codeSnippets = [
    'const backend = "Node.js";',
    'function buildSolutions() {}',
    'api.deploy().success();',
    'db.query("SELECT*");',
    'app.listen(3000);',
    'router.post("/api");',
    'if (error) debug();',
    'async await Promise;',
    'export default Component;',
    'import { React };',
  ]

  const generateRandomPosition = () => ({
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
  })

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {codeSnippets.map((code, i) => {
        const startPos = generateRandomPosition()
        
        return (
          <motion.div
            key={i}
            className="absolute font-mono text-xs md:text-sm text-orange-tech/20 whitespace-nowrap"
            style={{
              top: startPos.top,
              left: startPos.left,
            }}
            initial={{
              opacity: 0,
              y: 0,
              x: 0,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              y: -100,
              x: Math.random() * 40 - 20,
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeOut',
            }}
          >
            {`< ${code} />`}
          </motion.div>
        )
      })}
    </div>
  )
}
