function mostrarDica() {
  const dicas = [
    "🌱 Faça rotação de culturas para melhorar o solo.",
    "💧 Irrigação correta aumenta a produtividade.",
    "🌾 Análise de solo evita desperdício de fertilizantes.",
    "🐛 Controle biológico reduz uso de agrotóxicos."
  ];

  const aleatoria = dicas[Math.floor(Math.random() * dicas.length)];
  document.getElementById("dica").innerText = aleatoria;
}