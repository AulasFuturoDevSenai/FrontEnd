document.getElementById("btnValidar").addEventListener("click", function () {
  const dia = parseInt(document.getElementById('dia').value);
  const mes = parseInt(document.getElementById('mes').value);
  const ano = parseInt(document.getElementById('ano').value);
  const resultado = document.getElementById('resultado');

  let dataValida = true;

  if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
    resultado.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  if (ano <= 0 || ano >= 9999) {
    dataValida = false;
  } else if (mes < 1 || mes > 12) {
    dataValida = false;
  } else {
    let diasNoMes;

    if (mes === 2) {
      diasNoMes = 28; // ignorando anos bissextos por enquanto
    } else if ([4, 6, 9, 11].includes(mes)) {
      diasNoMes = 30;
    } else {
      diasNoMes = 31;
    }

    if (dia < 1 || dia > diasNoMes) {
      dataValida = false;
    }
  }

  resultado.textContent = dataValida ? "✅ Data válida" : "❌ Data inválida";
});
