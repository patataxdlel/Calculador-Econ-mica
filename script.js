// Espera que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", () => {
  const formulaCards = document.querySelectorAll(".formula-card");
  const formulaContainer = document.getElementById("formula-container");
  const formulaTitle = document.getElementById("formula-title");
  const formulaInputs = document.getElementById("formula-inputs");

  // Diccionario de fórmulas con campos ficticios por ahora
  const formulaInputsData = {
    "Interés Simple": ["Capital", "Tasa de interés (%)", "Tiempo (años)"],
    "Costo Total": ["Costo Fijo", "Costo Variable", "Cantidad de Unidades"],
    "Elasticidad Precio": ["% Cambio en Cantidad", "% Cambio en Precio"],
    "Producto Interno Bruto": ["Consumo", "Inversión", "Gasto Público", "Exportaciones", "Importaciones"],
    "Margen de Contribución": ["Precio de Venta", "Costo Variable"]
    // Puedes seguir añadiendo aquí más fórmulas
  };

  formulaCards.forEach(card => {
    card.addEventListener("click", () => {
      const formulaName = card.getAttribute("data-name");

      formulaTitle.textContent = formulaName;
      formulaInputs.innerHTML = ""; // Limpia campos anteriores

      const inputs = formulaInputsData[formulaName];
      if (inputs) {
        inputs.forEach(label => {
          const input = document.createElement("input");
          input.type = "number";
          input.placeholder = label;
          formulaInputs.appendChild(input);
        });

        const calcBtn = document.createElement("button");
        calcBtn.textContent = "Calcular (próximamente)";
        calcBtn.disabled = true;
        formulaInputs.appendChild(calcBtn);
      } else {
        formulaInputs.innerHTML = "<p>Fórmula en desarrollo...</p>";
      }

      formulaContainer.style.display = "block";
      formulaContainer.scrollIntoView({ behavior: "smooth" });
    });
  });
});
