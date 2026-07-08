// Banco de preguntas del Mapeo Espiritual
// Cada pregunta pertenece a una categoría y cada opción vale 0, 1 o 2 puntos.
// categorias: trabajo | maldicion | puertas | area | envidia

export const preguntasMapeo = [
  // TRABAJO ESPIRITUAL (obra espiritual en contra) — 5 preguntas
  {
    id: 1,
    categoria: 'trabajo',
    texto: '¿Has tenido sueños repetidos con tierra, animales muertos, agua sucia o personas persiguiéndote?',
    opciones: [
      { texto: 'Nunca', puntos: 0 },
      { texto: 'Alguna vez', puntos: 1 },
      { texto: 'Con frecuencia', puntos: 2 },
    ],
  },
  {
    id: 2,
    categoria: 'trabajo',
    texto: '¿Sientes que algo cambió de repente en tu vida, sin explicación, después de un evento o una persona específica?',
    opciones: [
      { texto: 'No', puntos: 0 },
      { texto: 'Tal vez', puntos: 1 },
      { texto: 'Sí, estoy segura(o)', puntos: 2 },
    ],
  },
  {
    id: 3,
    categoria: 'trabajo',
    texto: '¿Tienes una sensación de peso, cansancio o "algo encima" que no se va ni descansando bien?',
    opciones: [
      { texto: 'Nunca', puntos: 0 },
      { texto: 'A veces', puntos: 1 },
      { texto: 'Casi siempre', puntos: 2 },
    ],
  },
  {
    id: 4,
    categoria: 'trabajo',
    texto: '¿Los médicos no encuentran explicación para algún malestar físico o emocional que cargas hace tiempo?',
    opciones: [
      { texto: 'No aplica', puntos: 0 },
      { texto: 'Parcialmente', puntos: 1 },
      { texto: 'Sí, exactamente', puntos: 2 },
    ],
  },
  {
    id: 5,
    categoria: 'trabajo',
    texto: '¿Notas que animales (perros, gatos, aves) reaccionan de forma extraña cerca de ti o de tu casa?',
    opciones: [
      { texto: 'Nunca lo noté', puntos: 0 },
      { texto: 'Una o dos veces', puntos: 1 },
      { texto: 'Es algo frecuente', puntos: 2 },
    ],
  },

  // MALDICIÓN HEREDITARIA (familiar) — 4 preguntas
  {
    id: 6,
    categoria: 'maldicion',
    texto: '¿En tu familia se repiten los mismos problemas (divorcios, pobreza, enfermedades, muertes tempranas) generación tras generación?',
    opciones: [
      { texto: 'No', puntos: 0 },
      { texto: 'Algunos casos', puntos: 1 },
      { texto: 'Sí, es un patrón claro', puntos: 2 },
    ],
  },
  {
    id: 7,
    categoria: 'maldicion',
    texto: '¿Sientes que cargas un peso o una "carga" que no es tuya, sino de tu familia?',
    opciones: [
      { texto: 'No', puntos: 0 },
      { texto: 'A veces lo pienso', puntos: 1 },
      { texto: 'Sí, todo el tiempo', puntos: 2 },
    ],
  },
  {
    id: 8,
    categoria: 'maldicion',
    texto: '¿Hay adicciones, violencia o abandono que se repiten entre padres, abuelos e hijos en tu familia?',
    opciones: [
      { texto: 'No', puntos: 0 },
      { texto: 'En parte', puntos: 1 },
      { texto: 'Sí', puntos: 2 },
    ],
  },
  {
    id: 9,
    categoria: 'maldicion',
    texto: '¿Sientes que, sin importar cuánto te esfuerces, algo "invisible" te frena igual que frenó a tus padres o abuelos?',
    opciones: [
      { texto: 'No', puntos: 0 },
      { texto: 'Tal vez', puntos: 1 },
      { texto: 'Sí, claramente', puntos: 2 },
    ],
  },

  // PUERTAS ESPIRITUALES ABIERTAS (casa / entorno) — 4 preguntas
  {
    id: 10,
    categoria: 'puertas',
    texto: '¿Recibiste algún objeto (ropa, joya, mueble) que te generó incomodidad o mala energía al tenerlo cerca?',
    opciones: [
      { texto: 'No', puntos: 0 },
      { texto: 'Tal vez uno', puntos: 1 },
      { texto: 'Sí, más de uno', puntos: 2 },
    ],
  },
  {
    id: 11,
    categoria: 'puertas',
    texto: '¿Te mudaste a un lugar donde luego supiste que habían ocurrido peleas graves, enfermedades o una muerte?',
    opciones: [
      { texto: 'No', puntos: 0 },
      { texto: 'No estoy segura(o)', puntos: 1 },
      { texto: 'Sí', puntos: 2 },
    ],
  },
  {
    id: 12,
    categoria: 'puertas',
    texto: '¿Practicaste tabla ouija, tarot, sesiones espiritistas o rituales sin protección alguna vez?',
    opciones: [
      { texto: 'Nunca', puntos: 0 },
      { texto: 'Una vez, hace tiempo', puntos: 1 },
      { texto: 'Sí, varias veces', puntos: 2 },
    ],
  },
  {
    id: 13,
    categoria: 'puertas',
    texto: '¿Escuchas ruidos, sientes presencias o notas cambios de temperatura sin explicación en tu casa?',
    opciones: [
      { texto: 'Nunca', puntos: 0 },
      { texto: 'Rara vez', puntos: 1 },
      { texto: 'Con frecuencia', puntos: 2 },
    ],
  },

  // ÁREA DE VIDA ESTANCADA — 5 preguntas (una por área)
  {
    id: 14,
    categoria: 'area_amor',
    texto: '¿Sientes que tu vida amorosa está estancada, rota o repite siempre el mismo patrón doloroso?',
    opciones: [
      { texto: 'No, está bien', puntos: 0 },
      { texto: 'Un poco', puntos: 1 },
      { texto: 'Sí, totalmente', puntos: 2 },
    ],
  },
  {
    id: 15,
    categoria: 'area_dinero',
    texto: '¿El dinero se te escapa de las manos o las oportunidades de trabajo se cierran justo cuando parecen abrirse?',
    opciones: [
      { texto: 'No', puntos: 0 },
      { texto: 'A veces', puntos: 1 },
      { texto: 'Sí, siempre', puntos: 2 },
    ],
  },
  {
    id: 16,
    categoria: 'area_salud',
    texto: '¿Tu salud o tu energía física vienen decayendo sin una causa médica clara?',
    opciones: [
      { texto: 'No', puntos: 0 },
      { texto: 'Un poco', puntos: 1 },
      { texto: 'Sí, bastante', puntos: 2 },
    ],
  },
  {
    id: 17,
    categoria: 'area_familia',
    texto: '¿Las relaciones con tu familia están tensas, distantes o llenas de conflictos que no cesan?',
    opciones: [
      { texto: 'No', puntos: 0 },
      { texto: 'Algo', puntos: 1 },
      { texto: 'Sí, mucho', puntos: 2 },
    ],
  },
  {
    id: 18,
    categoria: 'area_paz',
    texto: '¿Sientes ansiedad, tristeza o inquietud que aparece sin motivo aparente, casi todos los días?',
    opciones: [
      { texto: 'No', puntos: 0 },
      { texto: 'A veces', puntos: 1 },
      { texto: 'Sí, casi siempre', puntos: 2 },
    ],
  },

  // ENVIDIA / ENERGÍAS EXTERNAS — 5 preguntas
  {
    id: 19,
    categoria: 'envidia',
    texto: '¿Notaste que, justo cuando algo bueno te iba a pasar, surgió un problema inesperado que lo frenó?',
    opciones: [
      { texto: 'No', puntos: 0 },
      { texto: 'Alguna vez', puntos: 1 },
      { texto: 'Muchas veces', puntos: 2 },
    ],
  },
  {
    id: 20,
    categoria: 'envidia',
    texto: '¿Hay alguien cercano a ti (familiar, amigo, compañero) del que sientes envidia o malas intenciones disfrazadas?',
    opciones: [
      { texto: 'No', puntos: 0 },
      { texto: 'Sospecho de alguien', puntos: 1 },
      { texto: 'Sí, estoy segura(o)', puntos: 2 },
    ],
  },
  {
    id: 21,
    categoria: 'envidia',
    texto: '¿Te sientes agotada(o) después de estar cerca de ciertas personas, como si te "vaciaran" la energía?',
    opciones: [
      { texto: 'Nunca', puntos: 0 },
      { texto: 'A veces', puntos: 1 },
      { texto: 'Sí, con frecuencia', puntos: 2 },
    ],
  },
  {
    id: 22,
    categoria: 'envidia',
    texto: '¿Has vivido traiciones o chismes que aparecieron justo cuando estabas creciendo o mejorando tu vida?',
    opciones: [
      { texto: 'No', puntos: 0 },
      { texto: 'Una vez', puntos: 1 },
      { texto: 'Varias veces', puntos: 2 },
    ],
  },
  {
    id: 23,
    categoria: 'envidia',
    texto: '¿Sientes, en el fondo, que hay una fuerza externa —y no solo tus propias decisiones— frenando tu progreso?',
    opciones: [
      { texto: 'No', puntos: 0 },
      { texto: 'Es posible', puntos: 1 },
      { texto: 'Sí, lo siento claramente', puntos: 2 },
    ],
  },
]

const AREA_LABELS = {
  area_amor: 'el Amor',
  area_dinero: 'el Dinero y el Trabajo',
  area_salud: 'la Salud',
  area_familia: 'la Familia',
  area_paz: 'la Paz Mental',
}

const PRIORIDAD_LABELS = {
  trabajo: 'un Trabajo Espiritual en tu contra',
  maldicion: 'una Maldición Hereditaria familiar',
  puertas: 'una Puerta Espiritual abierta en tu entorno',
  envidia: 'una Energía de Envidia externa',
}

// Calcula el mapeo completo a partir de las respuestas
// respuestas: { [preguntaId]: puntos }
export function calcularMapeo(respuestas) {
  const totalPreguntas = preguntasMapeo.length
  const puntosPorCategoria = {}
  let bloqueosDetectados = 0
  let puntajeTotal = 0
  let puntajeMaximo = 0

  preguntasMapeo.forEach((p) => {
    const puntos = respuestas[p.id] ?? 0
    puntajeTotal += puntos
    puntajeMaximo += 2
    if (puntos >= 1) bloqueosDetectados += 1
    puntosPorCategoria[p.categoria] = (puntosPorCategoria[p.categoria] || 0) + puntos
  })

  const porcentaje = Math.round((puntajeTotal / puntajeMaximo) * 100)

  let intensidad
  if (porcentaje <= 25) intensidad = 'Leve'
  else if (porcentaje <= 50) intensidad = 'Moderado'
  else if (porcentaje <= 75) intensidad = 'Alto'
  else intensidad = 'Crítico'

  // Área de vida más afectada
  const areas = ['area_amor', 'area_dinero', 'area_salud', 'area_familia', 'area_paz']
  let areaMasAfectada = areas[0]
  areas.forEach((a) => {
    if ((puntosPorCategoria[a] || 0) > (puntosPorCategoria[areaMasAfectada] || 0)) {
      areaMasAfectada = a
    }
  })

  // Bloqueo prioritario: mayor puntaje entre trabajo, maldicion, puertas, envidia
  const prioridades = ['trabajo', 'maldicion', 'puertas', 'envidia']
  let bloqueoPrioritario = prioridades[0]
  prioridades.forEach((c) => {
    if ((puntosPorCategoria[c] || 0) > (puntosPorCategoria[bloqueoPrioritario] || 0)) {
      bloqueoPrioritario = c
    }
  })

  return {
    totalPreguntas,
    bloqueosDetectados,
    puntajeTotal,
    puntajeMaximo,
    porcentaje,
    intensidad,
    trabajoEspiritual: (puntosPorCategoria['trabajo'] || 0) >= 5,
    maldicionHereditaria: (puntosPorCategoria['maldicion'] || 0) >= 4,
    puertasAbiertas: (puntosPorCategoria['puertas'] || 0) >= 4,
    areaMasAfectada,
    areaMasAfectadaLabel: AREA_LABELS[areaMasAfectada],
    bloqueoPrioritario,
    bloqueoPrioritarioLabel: PRIORIDAD_LABELS[bloqueoPrioritario],
    puntosPorCategoria,
  }
}
