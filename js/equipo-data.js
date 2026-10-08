// Datos del equipo. Para añadir o editar un profesional, modifica esta lista.
// El "id" es el que se usa en el enlace: veterinario.html?id=laura
const EQUIPO = [
  {
    id: "laura",
    nombre: "Dra. Laura Méndez",
    cargo: "Directora médica",
    avatar: "👩‍⚕️",
    experiencia: "18 años",
    bio: "Fundadora de Huellitas. Apasionada por la medicina preventiva y el bienestar animal, lidera al equipo con el compromiso de ofrecer una atención cercana y de calidad a cada mascota.",
    especialidades: ["Medicina interna", "Medicina preventiva", "Geriatría"],
    formacion: [
      "Médica Veterinaria – Universidad Nacional",
      "Maestría en Medicina Interna de Pequeños Animales",
      "Certificación en Manejo Libre de Miedo (Fear Free)",
    ],
    horario: [
      ["Lunes – Viernes", "8:00 – 14:00"],
      ["Sábado", "9:00 – 13:00"],
    ],
    dato: "Tiene tres perros rescatados: Toby, Luna y Pancho.",
  },
  {
    id: "carlos",
    nombre: "Dr. Carlos Rivas",
    cargo: "Cirujano veterinario",
    avatar: "👨‍⚕️",
    experiencia: "12 años",
    bio: "Especialista en cirugía de tejidos blandos y traumatología. Ha realizado más de 3.000 intervenciones y es el responsable de nuestro quirófano y del área de recuperación.",
    especialidades: ["Cirugía de tejidos blandos", "Traumatología", "Esterilizaciones"],
    formacion: [
      "Médico Veterinario – Universidad Central",
      "Especialización en Cirugía Veterinaria",
      "Diplomado en Anestesiología y Manejo del Dolor",
    ],
    horario: [
      ["Lunes – Jueves", "10:00 – 18:00"],
      ["Urgencias quirúrgicas", "Guardias rotativas"],
    ],
    dato: "En su tiempo libre es voluntario en campañas de esterilización gratuitas.",
  },
  {
    id: "sofia",
    nombre: "Dra. Sofía Torres",
    cargo: "Animales exóticos",
    avatar: "👩‍🔬",
    experiencia: "8 años",
    bio: "Atiende conejos, aves, reptiles, hurones y roedores. Su enfoque combina medicina especializada con asesoría en nutrición y ambiente para especies poco convencionales.",
    especialidades: ["Aves", "Reptiles", "Conejos y roedores", "Nutrición"],
    formacion: [
      "Médica Veterinaria – Universidad Nacional",
      "Posgrado en Medicina de Animales Exóticos",
      "Curso internacional de Medicina Aviar",
    ],
    horario: [
      ["Martes – Viernes", "12:00 – 20:00"],
      ["Sábado", "10:00 – 14:00"],
    ],
    dato: "Convive con una iguana llamada Kiwi y dos periquitos.",
  },
  {
    id: "andres",
    nombre: "Andrés Gómez",
    cargo: "Estilista canino",
    avatar: "🧑‍⚕️",
    experiencia: "6 años",
    bio: "Experto en estética y cuidado del pelaje. Trabaja con técnicas de bajo estrés para que el baño y el corte sean una experiencia agradable para cada mascota.",
    especialidades: ["Corte por raza", "Baños medicados", "Mascotas nerviosas"],
    formacion: [
      "Técnico en Peluquería Canina y Felina",
      "Certificación en Manejo de Comportamiento Animal",
    ],
    horario: [
      ["Lunes – Sábado", "9:00 – 17:00"],
    ],
    dato: "Ganó el segundo lugar en un concurso regional de estilismo canino.",
  },
];
