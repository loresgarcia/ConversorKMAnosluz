function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorKM = parseFloat(valor);
  var valorAnosLuz = valorKM * 0.0000000000001057;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    valorKM + " KM em anos luz é " + valorAnosLuz + " anos-luz";

  elementoValorConvertido.innerHTML = valorConvertido;
}