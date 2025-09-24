import { useState } from "react";
import estilos from './Header.module.css'
import { GoHomeFill } from "react-icons/go"
import { TfiHeadphoneAlt } from "react-icons/tfi"
import { FaPenNib } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { ImTrophy } from "react-icons/im";
import { TbLaurelWreathFilled } from "react-icons/tb";

export function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className={estilos.header}>
            <nav className={estilos.nav}>
                <div 
                    className={estilos.hamburguer} 
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    &#9776;
                </div>
                <ul className={`${estilos.menu} ${menuAberto ? estilos.aberto : ''}`}>
                    <li>
                        <Link to="/">
                            <img src='https://a.espncdn.com/guid/2ca761df-5f60-b2e9-22ed-e099c46d889b/logos/primary_logo_on_black_color.png' 
                                 alt='logo' 
                                 className={estilos.logo} 
                            />
                        </Link>
                    </li>
                    <li>
                        <Link className={estilos.link} to="/"><GoHomeFill className={estilos.icone}/>Home</Link>
                    </li>
                    <li>
                        <Link className={estilos.link} to="/assinatura"><FaPenNib className={estilos.icone}/>Assinatura</Link>
                    </li>
                    <li>
                        <Link className={estilos.link} to='/vitoria'><ImTrophy className={estilos.icone}/>Vitórias</Link>
                    </li>
                    <li>
                        <Link className={estilos.link} to='/hall'><TbLaurelWreathFilled className={estilos.icone}/>Hall da Fama</Link>
                    </li>
                    <li>
                        <Link className={estilos.link} to="/contato"><TfiHeadphoneAlt className={estilos.icone}/>Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
