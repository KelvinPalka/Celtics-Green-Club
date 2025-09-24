import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import estilos from "./FeedbackSlider.module.css";

const feedbacks = [
  {
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfWhYYswuyPFodIErClN0EHMlwexQX3tT_RA&s",
    nome: "André M.",
    estrelas: "⭐⭐⭐⭐⭐",
    texto:
      "Ser parte do Green Clube é viver a magia do Celtics todos os dias! Cada vitória, cada jogada me enche de orgulho.",
  },
  {
    imagem: "https://autogaragem.wordpress.com/wp-content/uploads/2013/03/dick_vigarista_01.jpg",
    nome: "Théo S.",
    estrelas: "⭐⭐⭐⭐⭐",
    texto:
      "O Green Clube transforma cada jogo em uma festa! A paixão da torcida e a energia do TD Garden me fazem sentir parte de algo único.",
  },
  {
    imagem: "https://m.media-amazon.com/images/M/MV5BMTMwNzIyMDcxNF5BMl5BanBnXkFtZTcwMDM4ODcyMw@@._V1_.jpg",
    nome: "Paiva",
    estrelas: "⭐⭐⭐⭐",
    texto:
      "Fazer parte do Green Clube é acompanhar uma história de conquistas e emoção. Cada temporada traz novas esperanças.",
  },
  {
    imagem: "https://wallpaperswide.com/download/rumpelstiltskin_shrek_forever_after-wallpaper-3840x2880.jpg",
    nome: "João P.",
    estrelas: "⭐⭐⭐⭐⭐",
    texto:
      "A torcida do Green Clube é incomparável! Estar junto com outros fãs e celebrar cada vitória é uma experiência única.",
  },
  {
    imagem: "https://i.pinimg.com/originals/46/16/1d/46161d4f4ddc7a278442dc32f3e08b85.jpg",
    nome: "Nicolas C.",
    estrelas: "⭐⭐⭐",
    texto:
      "Ser fã do Green Clube é mais do que torcer, é fazer parte de uma família. Cada jogo reforça minha paixão pelo clube!",
  },
  {
    imagem: "https://upload.wikimedia.org/wikipedia/en/b/b8/MrPopoDragonBall.png",
    nome: "Guilherme M.",
    estrelas: "⭐⭐⭐⭐⭐",
    texto:
      "Estar no Green Clube me faz sentir parte de algo especial. Cada partida é uma experiência inesquecível com outros fãs.",
  },
  {
    imagem: "https://images.steamusercontent.com/ugc/1836908865642607669/FCAE911A0B3D72DCB8B81EBC9F298D474DE693CF/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    nome: "Kelvin P.",
    estrelas: "⭐⭐⭐⭐",
    texto:
      "Torcer pelo Celtics junto do Green Clube é pura emoção. Cada vitória fortalece ainda mais a nossa paixão pelo time.",
  },
  {
    imagem: "https://pbs.twimg.com/media/DwgWEWmXQAEqSNh.png",
    nome: "Kaique M.",
    estrelas: "⭐⭐⭐⭐⭐",
    texto:
      "Ser parte do Green Clube é celebrar cada conquista, torcer junto da torcida e viver intensamente cada jogo do Celtics.",
  },
];

export function FeedbackSlider() {
  const configuracao = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1680, settings: { slidesToShow: 2 }, arrows: false },
      { breakpoint: 1160, settings: { slidesToShow: 1 }, arrows: false },
    ],
  };

  return (
    <div className={estilos.sliderContainer}>
      <Slider {...configuracao}>
        {feedbacks.map((item, index) => (
          <div key={index} className={estilos.wrapperCard}>
            <figure className={estilos.cardFeedback}>
              <img
                src={item.imagem}
                alt={`Foto de ${item.nome}`}
                className={estilos.avatarFeedback}
                loading="lazy"
              />
              <div
                className={estilos.estrelasFeedback}
                aria-label={`Avaliação: ${item.estrelas.length} de 5`}
              >
                {item.estrelas}
              </div>
              <blockquote className={estilos.textoFeedback}>
                {item.texto}
              </blockquote>
              <figcaption className={estilos.nomeFeedback}>
                {item.nome}
              </figcaption>
            </figure>
          </div>
        ))}
      </Slider>
    </div>
  );
}
