class Forca {


  constructor (palavraSecreta){
    this.letrasdaPalavra = palavraSecreta.split('');
    this.palavra= this.letrasdaPalavra.map((x) => x = '_');
    this.letrasChutadas = [];
    this.vidas = 6;// REGRA 1
  }

  chutar(letra) {

    if (letra.length > 1){
      //pass
    }// REGRA 3
    else {

      if (this.letrasdaPalavra.includes(letra) == true){
        let indice = this.letrasdaPalavra.indexOf(letra);
        this.palavra[indice]= letra;// REGRA 7
        this.letrasdaPalavra[indice]= null;
      }
      else{
        if (this.letrasChutadas.includes(letra) == true){
          //pass
        }// REGRA 4
        else{
          this.vidas--;// REGRA 6
        }
      }
      this.letrasChutadas.push(letra);// REGRA 5
    }
  }

  buscarEstado() { 
    if (this.vidas == 0){
      return "perdeu";
    }// REGRA 8
    else if (this.palavra.includes("_") == false && this.vidas>0){
      return "ganhou";
    }// REGRA 9
    return "aguardando chute"; // REGRA 2
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    let letrasChutadas = this.letrasChutadas;
    let vidas = this.vidas;
    let palavra = this.palavra;
      return {
          letrasChutadas, // Deve conter todas as letras chutadas
          vidas, // Quantidade de vidas restantes
          palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
