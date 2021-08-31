// Arrow Function sem bloco
const frase = "Murilo é um ótimo programador back-end";
const fraseRecortada = (frase) => frase.split(" ");
console.log(fraseRecortada(frase));

// Arrow Function com bloco
const frase2 = "Murilo é um ótimo programador back-end";
const fraseRecortada2 = (frase) => {
  return frase.split(" ");
};
console.log(fraseRecortada(frase2));

// Caso de uso das Arrow Functions atraves do metodo filter
const roupas = [
  { produto: "Camisa", preco: 25, cor: "Amarela" },
  { produto: "Calça", preco: 80, cor: "Azul" },
  { produto: "Jaqueta", preco: 100, cor: "Preta" },
  { produto: "Camiseta", preco: 15, cor: "Rosa" },
  { produto: "Calção", preco: 20, cor: "Vermelho" },
];
const precosMaioresQue50 = roupas.filter((roupas) => roupas.preco >= 50);
console.log(precosMaioresQue50);

// Caso de uso das Arrow Functions atraves de uma callback
setTimeout(() => console.log("Ola"), 1000);

// Não uso da Arrow Function
const pessoa = {
  nome: "Murilo",
  sayName() {
    console.log(this.nome);
    console.log(this);
  },
};
pessoa.sayName();

// Btn com o this da erro e sem ele não!
const myBtn = document.querySelector("#btn");
/* this.addEventListener("click", () => myBtn.classList.toggle("classe")); */
myBtn.addEventListener("click", () => myBtn.classList.toggle("classe"));
