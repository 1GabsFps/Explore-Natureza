export function imgSelector(){
const imagens = document.querySelectorAll('.img-scroll img');
const textos = document.querySelectorAll('.natureza-text');

imagens.forEach((imagem, index) => {
    imagem.addEventListener('click', () => {
      // Oculta todos os textos
    textos.forEach(texto => {
        texto.style.display = 'none';
    });


    textos[index].style.display = 'block';
    });
});
}
