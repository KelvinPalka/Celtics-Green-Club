import estilos from './Home.module.css'
import Landing from '../assets/img/Landing Page.png'
import { Footer } from '../componentes/Footer'
import { FeedbackSlider } from '../componentes/FeedbackSlider'
import { FaGift } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
import { PiCloverBold } from "react-icons/pi";
import { TbStar, TbTicket, TbNews, TbMail, TbBook, TbDeviceMobile, TbCoins, TbTrophy, TbUserCheck } from "react-icons/tb";

export function Home() {
    return (
        <div className={estilos.conteiner}>


            <div className={estilos.banner}>
                <img className={estilos.imgbanner} src={Landing} alt="Banner Celtics" />
                <div className={estilos.overlay}>
                    <div className={estilos.titulos}>
                        <h2 className={estilos.subtitulo_banner}>Torne-se um</h2>
                        <h1 className={estilos.titulo}>Celtics Club Green</h1>
                        <div className={estilos.slogan}>
                            <p className={estilos.subtitulo_banner_2}> Aqui é onde a tradição encontra a grandeza, com o orgulho Celtics. Unidos como um time, um sonho que se tornou realidade! </p>
                            <p className={estilos.subtitulo_banner_3}><strong>Bleed Green:</strong> torne-se um Celtics Club Green Insider</p>
                        </div>
                    </div>
                    <div className={estilos.botao}>
                        <button className={estilos.secundario}>Descubra Mais</button>
                        <button className={estilos.assinar}>Assinar Agora</button>
                    </div>
                </div>
            </div>


            <div className={estilos.sobre}>
                <h2 className={estilos.titulo2}>Boston Celtics</h2>
                <p className={estilos.texto}>O Boston Celtics é um dos times mais icônicos e vitoriosos da história da NBA, com 18 campeonatos e uma tradição que atravessa gerações. Fundado em 1946, o clube é sinônimo de excelência, jogando com um estilo coletivo e competitivo que conquistou fãs ao redor do mundo. Jogadores lendários como Bill Russell, Larry Bird e Paul Pierce definiram a história da franquia, mas a paixão e dedicação dos Celtics continuam vivos em cada jogo, com o time sempre em busca de novos títulos e momentos inesquecíveis. Ao fazer parte da nossa comunidade, você se junta a uma legião de torcedores apaixonados e entra para a história de um dos maiores times do basquete mundial.</p>
            </div>

            <div className={estilos.vantagens}>
                <h2 className={estilos.titulo2}>Benefícios e Vantagens</h2>
                <ul className={estilos.cards}>
                    <li>
                        <div className={estilos.card_icon}>
                            <TbStar />
                        </div>
                        <h4 className={estilos.card_title}>Conteúdos Exclusivos</h4>
                        <p className={estilos.card_desc}>Acesso exclusivo a conteúdos e entrevistas com jogadores e comissão técnica.</p>
                    </li>
                    <li>
                        <div className={estilos.card_icon}>
                            <TbTicket />
                        </div>
                        <h4 className={estilos.card_title}>Descontos em Ingressos</h4>
                        <p className={estilos.card_desc}>Descontos em ingressos para jogos no TD Garden.</p>
                    </li>
                    <li>
                        <div className={estilos.card_icon}>
                            <FaGift />
                        </div>
                        <h4 className={estilos.card_title}>Merch Promocional</h4>
                        <p className={estilos.card_desc}>Merchandising oficial com preço promocional.</p>
                    </li>
                    <li>
                        <div className={estilos.card_icon}>
                            <PiCloverBold />
                        </div>
                        <h4 className={estilos.card_title}>Sorteios</h4>
                        <p className={estilos.card_desc}>Participação em sorteios de produtos autografados.</p>
                    </li>
                    <li>
                        <div className={estilos.card_icon}>
                            <GoCalendar />
                        </div>
                        <h4 className={estilos.card_title}>Eventos Privados</h4>
                        <p className={estilos.card_desc}>Convites para eventos privados do clube.</p>
                    </li>
                    <li>
                        <div className={estilos.card_icon}>
                            <TbNews />
                        </div>
                        <h4 className={estilos.card_title}>Acesso Antecipado</h4>
                        <p className={estilos.card_desc}>Acesso antecipado a notícias e estatísticas do time.</p>
                    </li>
                    <li>
                        <div className={estilos.card_icon}>
                            <TbMail />
                        </div>
                        <h4 className={estilos.card_title}>Newsletter</h4>
                        <p className={estilos.card_desc}>Newsletter mensal com análises e bastidores.</p>
                    </li>
                    <li>
                        <div className={estilos.card_icon}>
                            <TbBook />
                        </div>
                        <h4 className={estilos.card_title}>História & Curiosidades</h4>
                        <p className={estilos.card_desc}>Conteúdos exclusivos de história e curiosidades do Boston Celtics.</p>
                    </li>
                    <li>
                        <div className={estilos.card_icon}>
                            <TbDeviceMobile />
                        </div>
                        <h4 className={estilos.card_title}>App Premium</h4>
                        <p className={estilos.card_desc}>Aplicativo do clube com recursos premium para assinantes.</p>
                    </li>
                    <li>
                        <div className={estilos.card_icon}>
                            <TbCoins />
                        </div>
                        <h4 className={estilos.card_title}>Clube de Pontos</h4>
                        <p className={estilos.card_desc}>Clube de pontos para trocar por experiências e produtos oficiais.</p>
                    </li>
                    <li>
                        <div className={estilos.card_icon}>
                            <TbTrophy />
                        </div>
                        <h4 className={estilos.card_title}>Sorteios Exclusivos</h4>
                        <p className={estilos.card_desc}>Concorra a sorteios exclusivos.</p>
                    </li>
                    <li>
                        <div className={estilos.card_icon}>
                            <TbUserCheck />
                        </div>
                        <h4 className={estilos.card_title}>Encontro com Astros</h4>
                        <p className={estilos.card_desc}>Tenha a chance de passar uma tarde com um dos nossos Astros.</p>
                    </li>
                </ul>

            </div>
            <div className={estilos.feedbacks}>
                <h2 className={estilos.titulo2}>Avaliações dos fãs</h2>
                <FeedbackSlider />
            </div>

            <Footer />

        </div>
    )
}