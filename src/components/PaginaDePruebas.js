import { useParams } from "react-router-dom";

const PaginaDePruebas = () => {
    const { id } = useParams();

    return (
        <div className="content">
            <h1 className="subheader">Página de pruebas</h1>
            <h2>{id}</h2>
        </div>
    );
};

export default PaginaDePruebas;