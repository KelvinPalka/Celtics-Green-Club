import { Home } from '../paginas/Home'
import { Header } from '../componentes/Header'
import { Contato } from '../paginas/Contato'
import { Vitoria } from '../paginas/Vitorias'
import { Assinatura } from '../paginas/Assinatura'
import { HalldaFama } from '../paginas/HalldaFama'
import { BrowserRouter, Routes, Route } from "react-router-dom"

export function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/assinatura" element={<Assinatura />} />
                <Route path="/contato" element={<Contato />} />
                <Route path='/vitoria' element={<Vitoria />} />
                <Route path='/hall' element={<HalldaFama/>}/>
            </Routes>
        </BrowserRouter>
    )
}
