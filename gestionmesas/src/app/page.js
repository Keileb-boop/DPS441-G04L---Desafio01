'use client';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectorZona from '@/components/SelectorZona';
import PlanoRestaurante from '@/components/PlanoRestaurante';
import ResumenReserva from '@/components/ResumenReserva';
import './page.module.css';

export default function Home() {
  const zonas = ['Terraza', 'Interior', 'VIP'];
  const [zonaSeleccionada, setZonaSeleccionada] = useState(zonas[0]);
  const [mesas, setMesas] = useState(Array(10).fill(false));
  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);

  const reservarMesa = (id) => {
    const nuevasMesas = [...mesas];
    nuevasMesas[id] = true;
    setMesas(nuevasMesas);
    setMesaSeleccionada(id);
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="titulo">Gestión de Reserva de Mesas</h1>
      <div className="selector-zona mt-3">
        <SelectorZona zonaSeleccionada={zonaSeleccionada} setZonaSeleccionada={setZonaSeleccionada} />
      </div>
      <div className="zona-seleccionada mt-4">
        <h3 className="zona-titulo">Zona: {zonaSeleccionada}</h3>
      </div>
      <div className="plano-restaurante mt-3">
        <PlanoRestaurante mesas={mesas} reservarMesa={reservarMesa} />
      </div>
      <div className="resumen-reserva mt-4">
        <ResumenReserva mesaSeleccionada={mesaSeleccionada} zonaSeleccionada={zonaSeleccionada} />
      </div>
    </div>
  );
}
