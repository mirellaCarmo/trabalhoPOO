class Moedas{
 dolar;
 real;
 euro;
 libra;

 constructor(){
     this.dolar = 4.66;
     this.euro = 5.14;
     this.libra = 6.11;
 }
 converterRealDolar(){
    this.real = document.getElementById("realDolar").value;
    const valorEmDolar = parseFloat(this.real)/this.dolar;
    document.getElementById("resultadoRealDolar").innerText = `R$${this.real} = US$${valorEmDolar.toFixed(2)}`

 }
 converterRealEuro(){
     this.real = document.getElementById("realEuro").value;
     const valorEmEuro = parseFloat(this.real)/this.euro
     document.getElementById("resultadoRealEuro").innerText = `R$${this.real} = €${valorEmEuro.toFixed(2)}`
 }

 converterRealLibra(){
    this.real = document.getElementById("realLibra").value;
    const valorEmLibra = parseFloat(this.real)/this.libra;
    document.getElementById("resultadoRealLibra").innerText = `R$${this.real} = £${valorEmLibra.toFixed(2)}`
 }

 converterDolarReal(){
    this.dolar2 = document.getElementById("dolarReal").value;
    const valorEmReal = parseFloat(this.dolar2)*this.dolar;
    document.getElementById("resultadoDolarReal").innerText = `US$${this.dolar2} = R$${valorEmReal.toFixed(2)}`
}

converterEuroReal(){
    this.euro2 = document.getElementById("euroReal").value;
    const valorEmReal = parseFloat(this.euro2)*this.euro;
    document.getElementById("resultadoEuroReal").innerText = `€${this.euro2} = R$${valorEmReal.toFixed(2)}`
}

converterLibraReal(){
    this.libra2 = document.getElementById("libraReal").value;
    const valorEmReal = parseFloat (this.libra2)*this.libra;
    document.getElementById("resultadoLibraReal").innerText = `£${this.libra2} = R$${valorEmReal.toFixed(2)}`
}
}
const conversao = new Moedas();
