import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Configurar transportador de email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
})

// Rota para enviar email
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validar dados
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' })
    }

    // Email para você (dono do portfolio)
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Nova Mensagem de Contato - ${name}`,
      html: `
        <h2>Nova Mensagem de Contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Mensagem:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Enviado via Portfolio</small></p>
      `
    }

    // Enviar email
    await transporter.sendMail(mailOptions)

    // Email de confirmação para o visitante
    const confirmationEmail = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Recebemos sua mensagem!',
      html: `
        <h2>Obrigado por entrar em contato!</h2>
        <p>Oi ${name},</p>
        <p>Recebemos sua mensagem e responderemos em breve.</p>
        <hr>
        <p><strong>Sua mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Atenciosamente,<br>Gabriel Silvano</p>
      `
    }

    // Enviar confirmação
    await transporter.sendMail(confirmationEmail)

    return res.status(200).json({ message: 'Email enviado com sucesso!' })
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return res.status(500).json({ 
      error: 'Erro ao enviar email. Verifique as credenciais do Gmail.' 
    })
  }
})

// Rota de teste
app.get('/health', (req, res) => {
  res.json({ status: 'Servidor de emails rodando!' })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`✅ Servidor de emails rodando em http://localhost:${PORT}`)
})
