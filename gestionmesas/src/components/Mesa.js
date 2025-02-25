export default function Mesa({ mesa, reservarMesa }) {
  const isMesaOcupada = () => {
    return mesa.estado === 'ocupada';
  };

  return (
    <button
      className={`btn ${isMesaOcupada() ? 'btn-secondary' : 'btn-outline-success'}`}
      onClick={() => !isMesaOcupada() && reservarMesa(mesa.id)}
      disabled={isMesaOcupada()}
    >
      Mesa {mesa.id}
    </button>
  );
}