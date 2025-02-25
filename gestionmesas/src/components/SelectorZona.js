export default function SelectorZona({ zonaSeleccionada, setZonaSeleccionada }) {
  const zonas = ['Terraza', 'Interior', 'VIP'];
  const zonaClases = {
    Terraza: 'zona-terraza',
    Interior: 'zona-interior',
    VIP: 'zona-vip'
  };

  return (
    <div>
      <label htmlFor="zona" className="form-label">Selecciona una zona:</label>
      <select className="form-select" id="zona" value={zonaSeleccionada} onChange={(e) => setZonaSeleccionada(e.target.value)}>
        {zonas.map((zona, index) => (
          <option key={index} value={zona} className={zonaClases[zona]}>{zona}</option>
        ))}
      </select>
    </div>
  );
}