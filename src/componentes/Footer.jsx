import estilos from './Footer.module.css'
import { TbCode } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { FaJsSquare } from "react-icons/fa";
import { SiVite, SiNpm } from "react-icons/si";
import { FaReact, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export function Footer() {
    return (
        <footer className={estilos.footer}>

            <div className={estilos.container}>

                <div className={estilos.coluna_esquerda}>
                    <h3 className={estilos.titulo}>Desenvolvedores</h3>
                    <div className={estilos.grid}>
                        <div className={estilos.dev}>
                            <TbCode className={estilos.icone} />
                            <p className={estilos.nome}>Kelvin Willian Palka de Souza</p>
                        </div>
                        <div className={estilos.ctt_dev}>
                            <HiOutlineMail className={estilos.icone} />
                            <p className={estilos.email}>kelvin.souza30@etec.sp.gov.br</p>
                        </div>
                        <div className={estilos.dev}>
                            <TbCode className={estilos.icone} />
                            <p className={estilos.nome}>Nicolas Cunha Ribeiro</p>
                        </div>
                        <div className={estilos.ctt_dev}>
                            <HiOutlineMail className={estilos.icone} />
                            <p className={estilos.email}>nicolas.ribeiro20@etec.sp.gov.br</p>
                        </div>
                    </div>

                    <div className={estilos.tec}>
                        <p> <FaReact className={estilos.icone} /> React</p>
                        <p> <FaJsSquare className={estilos.icone}/> JavaScript</p>
                        <p> <SiVite className={estilos.icone}/> Vite</p>
                    </div>
                </div>

                <div className={estilos.separador_vertical}></div>

                <div className={estilos.coluna_direita}>
                    <div className={estilos.social}>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram className={estilos.icone} /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter className={estilos.icone} /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook className={estilos.icone} /></a>
                    </div>

                    <div className={estilos.links}>
                        <a href="#">Mapa do Site</a>
                        <a href="#">FAQ</a>
                        <a href="#">Política de Privacidade</a>
                        <a href="#">Termos de Uso</a>
                    </div>

                    <div className={estilos.newsletter}>
                        <p>Assine nossa newsletter</p>
                        <div className={estilos.input_group}>
                            <input type="email" placeholder="Seu email" />
                            <button>Inscrever-se</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className={estilos.separador_horizontal}></div>

            <div className={estilos.rodape}>
                <p>2025 &copy; Todos os Direitos Reservados</p>
                <p>Trabalho Acadêmico sem Fins Lucrativos</p>
            </div>

        </footer>
    )
}
