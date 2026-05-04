import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    // Animação suave usando requestAnimationFrame
    const animate = () => {
      // Interpolação suave (lerp) para seguir o mouse
      cursorPosition.current.x += (mousePosition.current.x - cursorPosition.current.x) * 0.2;
      cursorPosition.current.y += (mousePosition.current.y - cursorPosition.current.y) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPosition.current.x - 20}px, ${cursorPosition.current.y - 20}px)`;
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Detectar quando passa sobre elementos clicáveis
    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = target.tagName === 'A' || 
                         target.tagName === 'BUTTON' || 
                         target.closest('button') ||
                         target.closest('a') ||
                         target.className.includes('cursor-pointer') ||
                         target.className.includes('hover:');

      if (isClickable && cursorDotRef.current) {
        cursorDotRef.current.classList.add('scale-150', 'bg-orange-tech');
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      const isClickable = target.tagName === 'A' || 
                         target.tagName === 'BUTTON' || 
                         target.closest('button') ||
                         target.closest('a') ||
                         target.className.includes('cursor-pointer') ||
                         target.className.includes('hover:');

      if (isClickable && cursorDotRef.current) {
        cursorDotRef.current.classList.remove('scale-150', 'bg-orange-tech');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <>
      {/* Cursor exterior (anel) */}
      <div
        ref={cursorRef}
        className="fixed w-10 h-10 border-2 border-orange-tech rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{ transition: 'none' }}
      />

      {/* Cursor interior (ponto) */}
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-orange-tech rounded-full pointer-events-none z-[10000] transition-all duration-200"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'screen'
        }}
      />

      {/* CSS para esconder o cursor padrão */}
      <style>{`
        body {
          cursor: none;
        }
      `}</style>
    </>
  );
}
