import { useState, useEffect } from "react";

const CLAVE_STORAGE = "proy_fav";

function PanelFavoritos({ elementos }) {
    const [favoritos, setFavoritos] = useState(() => {
        const guardados = localStorage.getItem(CLAVE_STORAGE);
        return guardados ? JSON.parse(guardados) : [];
    });

useEffect(() => {
    localStorage.setItem(CLAVE_STORAGE, JSON.stringify(favoritos));
}, [favoritos]);


function alternarFavorito(id) {
        setFavoritos(favoritos.filter((favId) => favId !== id));
}

return (
    <section className="panel-favoritos">
    <p>Favoritos seleccionados: {favoritos.length}</p>
    elementos.map((elemento) => (
    {/* completar: renderizar 'elementos' con .map() y botón de favorito */}
    </section>
    );
}