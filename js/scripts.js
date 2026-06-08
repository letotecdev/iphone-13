const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => { //muito utilizado em listas para pecorrer toda ela como um loop
            btn.addEventListener("click", (e) => { 
              console.log(e); // ao clicar no botão ele mostra os dados do botao clicado 


          //-------Removendo selected dos botoes ---------------------------------------

              buttons.forEach((btn) => // ao clicar vai remover a classe selected de todos os botões de uma vez
                btn.querySelector(".color").classList.remove("selected") // acessa a lista de class e tira o selected (a primeira cor no casso tem em class = "color selected")
              );
          //-------Adicionando o selected ao botao correto--------------------

              const button = e.target; //vai pegar  target do botao clicado 
              

              const id = button.getAttribute("id"); // com target da para extrair a id do botao que esta sendo clicado

              button.querySelector(".color").classList.add("selected"); // vai add a clase selected no botao


          //-----------Mudando imagem e colocando efeito com delay---------------------

              image.classList.toggle("changing"); // vai add/ativar a classe changging
              image.setAttribute("src", `img/iphone_${id}.jpg`); // vai trocar o atributo da imagel atual pela nova com o id do botao atual 

              setTimeout(() => {
                  image.classList.toggle("changing"); // vai remover/desativar  a class changing
              }, 200); //vai  por um delay de 2s na imagem 
            });
});
