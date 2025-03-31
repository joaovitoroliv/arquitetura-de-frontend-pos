import { Outlet } from "react-router-dom"; // Header vai ser padrao, mas Outlet vai ser alterado dinamicamente
import { Header } from "../components/Header";

// Componente que ira representar a parte comum que nao sao alteradas baseadas na URL como por exemplo cabeçalho e rodapé
export function RootLayout() {
    return (
        <> <Header/>
            <Outlet/>
        </>
    )
}
// <> ReactFragment - Um único elemento raiz no return
// Componente <Outlet> - Renderiza o componente filho descito no children/element do arquivo routes.js