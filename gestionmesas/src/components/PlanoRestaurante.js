export default function PlanoRestaurante({ mesas, reservarMesa }) {
  return (
    <div className="d-flex justify-content-center flex-wrap gap-2 mt-3">
      {mesas.map((reservada, index) => (
        <button
          key={index}
          className={`mesa btn ${reservada ? 'btn-danger' : 'btn-success'}`}
          onClick={() => reservarMesa(index)}
          disabled={reservada}
        >
          Mesa {index + 1}
        </button>
      ))}
    </div>
  );
}