// Muestra el perfil según el id del enlace (veterinario.html?id=laura)
const id = new URLSearchParams(window.location.search).get("id");
const persona = EQUIPO.find((p) => p.id === id);
const contenedor = document.getElementById("perfil");

if (!persona) {
  contenedor.innerHTML = `
    <div class="not-found">
      <h1>Profesional no encontrado 🐾</h1>
      <p style="color:var(--muted);margin-bottom:2rem;">El perfil que buscas no existe o fue movido.</p>
      <a href="index.html#equipo" class="btn">Ver todo el equipo</a>
    </div>`;
} else {
  document.title = `${persona.nombre} · Huellitas`;

  const chips = persona.especialidades.map((e) => `<span class="chip">${e}</span>`).join("");
  const formacion = persona.formacion.map((f) => `<li>🎓 ${f}</li>`).join("");
  const horario = persona.horario
    .map(([dia, hora]) => `<li><strong>${dia}</strong><span>${hora}</span></li>`)
    .join("");

  contenedor.innerHTML = `
    <div class="profile-hero">
      <div class="profile-avatar">${persona.avatar}</div>
      <div>
        <span class="tag">${persona.experiencia} de experiencia</span>
        <h1>${persona.nombre}</h1>
        <p class="role">${persona.cargo}</p>
        <p class="bio">${persona.bio}</p>
        <div class="chips">${chips}</div>
        <a href="index.html#contacto" class="btn">Agendar cita con ${persona.nombre.split(" ").slice(0, 2).join(" ")}</a>
      </div>
    </div>

    <div class="profile-grid">
      <div class="card"><h3>📚 Formación</h3><ul>${formacion}</ul></div>
      <div class="card schedule"><h3>🕒 Horario de atención</h3><ul>${horario}</ul></div>
      <div class="card"><h3>💡 Dato curioso</h3><p>${persona.dato}</p></div>
    </div>`;
}

// Otros miembros del equipo
const otros = EQUIPO.filter((p) => p.id !== id)
  .map(
    (p) => `
    <a href="veterinario.html?id=${p.id}" class="card">
      <div class="avatar">${p.avatar}</div>
      <h3>${p.nombre}</h3>
      <p class="role">${p.cargo}</p>
      <span class="more">Ver perfil →</span>
    </a>`
  )
  .join("");
document.getElementById("otros").innerHTML = otros;
