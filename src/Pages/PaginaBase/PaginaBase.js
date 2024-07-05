import Cabecera from "Components/Cabecera/Cabecera";
import Container from "Components/Container/Container";
import NuevoVideo from "Pages/NuevoVideo/NuevoVideo";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <main>
            <Cabecera />
            <NuevoVideo>
                <Container>
                    <Outlet />
                </Container>
            </NuevoVideo>
        </main>
    );
}

export default PaginaBase;
