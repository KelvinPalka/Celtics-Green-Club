import { Hamburguer } from '../componentes/Hamburguer'
import estilos from './Assinatura.module.css'

export function Assinatura(){
    return(
        <div className={estilos.body}>
            <Hamburguer/>
        </div>
    )
}
