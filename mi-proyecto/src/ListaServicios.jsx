import TarjetaServicio from "./TarjetaServicio";
const servicios = [
    {id: 1, icono: "⚙", titulo: "Inicio", descripcion: "Página principal del sitio"},
    {id: 2, icono: "⭐", titulo: "Ranking", descripcion: "Ranking Semanal por Rating"},
    {id: 3, icono: "🔍", titulo: "Busqueda", descripcion: "Búsqueda por Canción/Álbum/Artista"},
    {id: 4, icono: "📱", titulo: "Contacto", descripcion: "Información de Contacto"},
];  

function ListaServicios() {
    if (servicios.length === 0) {
        return <p> No hay servicios disponibles </p>
    } else {
        return servicios.map((servicio) => (
            <TarjetaServicio 
                key={servicio.id} 
                icono={servicio.icono}
                titulo={servicio.titulo}
                descripcion={servicio.descripcion}
            />
        ));
    }
}


export default ListaServicios; 