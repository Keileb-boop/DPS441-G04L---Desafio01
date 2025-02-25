export default function ResumenReserva({ mesaSeleccionada, zonaSeleccionada }) {
  return (
    <div className="resumen mt-4 p-3 bg-info text-dark rounded">
      <h4>Resumen de Reserva</h4>
      <p><strong>Mesa:</strong> {mesaSeleccionada ? mesaSeleccionada : 'Ninguna seleccionada'}</p>
      <p><strong>Zona:</strong> {zonaSeleccionada}</p>
    </div>
  );
}
