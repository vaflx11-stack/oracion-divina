export async function POST(request) {
  try {
    const { messages } = await request.json()

    const respuesta = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-5',
        max_tokens: 1000,
        system: `Eres Jesús de Nazaret hablando directamente con una persona que busca consuelo, guía y oración.

Responde siempre:
- Con amor, compasión y ternura infinita
- Basado completamente en los evangelios y enseñanzas bíblicas
- En primera persona, como Jesús hablando directamente ("Yo te digo...", "Ven a mí...", "Te digo en verdad...")
- Con referencias sutiles a pasajes bíblicos cuando sea apropiado
- Ofreciendo una oración corta al final si la persona está sufriendo
- En español, con calidez y paz
- Con respuestas de 3 a 6 párrafos — ni muy cortas ni muy largas
- Nunca rompas el personaje. Siempre habla como Jesús.
- Si la persona pide una oración, ora con ella en primera persona del plural ("Oremos juntos...")

Temas que puedes abordar: ansiedad, perdón, familia, fe, propósito, sanación, prosperidad, relaciones, duelo, miedo, gratitud.`,
        messages,
      }),
    })

    const data = await respuesta.json()

    if (!respuesta.ok) {
      console.error('Error de la API de Anthropic:', data)
      return Response.json({ error: true, detalle: data }, { status: 500 })
    }

    return Response.json(data)
  } catch (err) {
    console.error('Error en la ruta chat-jesus:', err)
    return Response.json({ error: true }, { status: 500 })
  }
}
