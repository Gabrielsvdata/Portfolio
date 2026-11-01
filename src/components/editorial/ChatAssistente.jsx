import React, { useEffect, useRef, useState } from 'react'

// Balão de chat com o assistente (API em /chat do repositório assistente-whatsapp).
// Sem VITE_ASSISTENTE_URL, ou com a API fora do ar, o balão mostra os contatos diretos.
const API_URL = (import.meta.env.VITE_ASSISTENTE_URL || 'https://assistente-731956238064.southamerica-east1.run.app').replace(/\/$/, '')
const WHATSAPP = 'https://wa.me/5511974019394'
const EMAIL = 'mailto:gabrielsilvanovieira7@gmail.com'

const ATALHOS = [
  { label: 'Projetos', msg: 'projetos' },
  { label: 'Experiência', msg: 'experiência' },
  { label: 'Currículo', msg: 'currículo' },
  { label: 'Falar com o Gabriel', msg: 'falar com o Gabriel' },
]

const BOAS_VINDAS = 'Oi! Sou o assistente do Gabriel. Pergunte sobre projetos, experiência ou como entrar em contato.'

function idSessao() {
  try {
    const salvo = localStorage.getItem('gs-chat-sessao')
    if (salvo) return salvo
    const novo = `web-${Math.random().toString(36).slice(2, 10)}-${Date.now().toString(36)}`
    localStorage.setItem('gs-chat-sessao', novo)
    return novo
  } catch {
    return `web-${Date.now().toString(36)}`
  }
}

// Converte URLs em links clicáveis
function Texto({ texto }) {
  const partes = texto.split(/(https?:\/\/[^\s]+)/g)
  return (
    <>
      {partes.map((p, i) =>
        /^https?:\/\//.test(p)
          ? <a key={i} href={p} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 break-all">{p.replace(/^https?:\/\//, '')}</a>
          : <React.Fragment key={i}>{p}</React.Fragment>
      )}
    </>
  )
}

export default function ChatAssistente() {
  const [aberto, setAberto] = useState(false)
  const [mensagens, setMensagens] = useState([{ de: 'bot', texto: BOAS_VINDAS }])
  const [entrada, setEntrada] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [offline, setOffline] = useState(!API_URL)
  const fim = useRef(null)
  const campo = useRef(null)

  useEffect(() => { fim.current?.scrollIntoView({ behavior: 'smooth' }) }, [mensagens, aberto])
  useEffect(() => { if (aberto) campo.current?.focus() }, [aberto])

  async function enviar(texto) {
    const msg = (texto ?? entrada).trim()
    if (!msg || enviando) return
    setEntrada('')
    setMensagens((m) => [...m, { de: 'eu', texto: msg }])
    if (offline) return
    setEnviando(true)
    try {
      const r = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mensagem: msg, sessao: idSessao() }),
      })
      if (!r.ok) throw new Error(String(r.status))
      const dados = await r.json()
      setMensagens((m) => [...m, { de: 'bot', texto: dados.resposta }])
    } catch {
      setOffline(true)
      setMensagens((m) => [...m, { de: 'bot', texto: 'O assistente está fora do ar agora. Fale direto com o Gabriel pelos botões abaixo.' }])
    } finally {
      setEnviando(false)
    }
  }

  return (
    <>
      {/* Botão flutuante */}
      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-label={aberto ? 'Fechar assistente' : 'Abrir assistente'}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-ink text-paper border border-ink pl-1 pr-4 py-1 rounded-full shadow-lg hover:translate-y-[-2px] transition-transform"
      >
        <img src="/images/avatar-pixel.png" alt="" className="w-10 h-10 rounded-full bg-paper object-cover object-top [image-rendering:pixelated]" />
        <span className="font-mono text-[11px] uppercase tracking-[0.18em]">{aberto ? 'Fechar' : 'Pergunte sobre mim'}</span>
      </button>

      {aberto && (
        <section
          aria-label="Assistente do Gabriel"
          className="fixed z-50 bottom-20 right-5 left-5 sm:left-auto sm:w-[380px] max-h-[70vh] flex flex-col bg-paper text-ink border border-ink shadow-2xl"
        >
          <header className="flex items-center gap-3 px-4 py-3 border-b border-ink">
            <img src="/images/avatar-pixel.png" alt="Avatar em pixel art do Gabriel" className="w-9 h-9 bg-paper border border-ink object-cover object-top [image-rendering:pixelated]" />
            <div className="leading-tight">
              <p className="font-semibold text-[14px]">Assistente do Gabriel</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                {offline ? 'offline · contatos diretos abaixo' : 'IA · responde só com dados reais'}
              </p>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-[13px] leading-relaxed">
            {mensagens.map((m, i) => (
              <div key={i} className={m.de === 'eu' ? 'flex justify-end' : 'flex justify-start'}>
                <p className={`max-w-[85%] px-3 py-2 whitespace-pre-line ${m.de === 'eu' ? 'bg-ink text-paper' : 'border border-ink'}`}>
                  <Texto texto={m.texto} />
                </p>
              </div>
            ))}
            {enviando && <p className="font-mono text-[11px] text-mute">digitando…</p>}
            <div ref={fim} />
          </div>

          <div className="px-4 pb-2 flex flex-wrap gap-2">
            {offline ? (
              <>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] uppercase tracking-wider border border-ink px-2 py-1 hover:bg-ink hover:text-paper">WhatsApp ↗</a>
                <a href={EMAIL} className="font-mono text-[11px] uppercase tracking-wider border border-ink px-2 py-1 hover:bg-ink hover:text-paper">E-mail ↗</a>
              </>
            ) : ATALHOS.map((a) => (
              <button key={a.msg} type="button" onClick={() => enviar(a.msg)} className="font-mono text-[11px] uppercase tracking-wider border border-ink px-2 py-1 hover:bg-ink hover:text-paper">
                {a.label}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); enviar() }}
            className="flex border-t border-ink"
          >
            <input
              ref={campo}
              value={entrada}
              onChange={(e) => setEntrada(e.target.value)}
              maxLength={500}
              placeholder={offline ? 'Assistente indisponível' : 'Escreva sua pergunta…'}
              disabled={offline}
              className="flex-1 bg-transparent px-4 py-3 text-[13px] outline-none placeholder:text-mute disabled:opacity-60"
            />
            <button type="submit" disabled={offline || enviando} className="px-4 font-mono text-[11px] uppercase tracking-[0.18em] border-l border-ink hover:bg-ink hover:text-paper disabled:opacity-40">
              Enviar
            </button>
          </form>
        </section>
      )}
    </>
  )
}
