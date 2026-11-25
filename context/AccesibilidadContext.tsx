
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';

// Configuración de accesibilidad
interface AccesibilidadType {
  tema: 'claro' | 'oscuro';
  tamañoTexto: number;
  altoContraste: boolean;
  reducirMovimiento: boolean;

  cambiarTema: (tema: 'claro' | 'oscuro') => void;
  aumentarTexto: () => void;
  disminuirTexto: () => void;
  alternarContraste: () => void;
  alternarMovimiento: () => void;
}

// Crear el contexto
const AccesibilidadContext = createContext<AccesibilidadType | undefined>(
  undefined
);

// Proveedor global
export function AccesibilidadProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [tema, setTema] = useState<'claro' | 'oscuro'>('claro');
  const [tamañoTexto, setTamañoTexto] = useState(1);
  const [altoContraste, setAltoContraste] = useState(false);
  const [reducirMovimiento, setReducirMovimiento] = useState(false);

  // Cambiar tema
  const cambiarTema = (nuevoTema: 'claro' | 'oscuro') => {
    setTema(nuevoTema);
  };

  // Aumentar texto (máximo 150%)
  const aumentarTexto = () => {
    setTamañoTexto(actual =>
      Math.min(1.5, Math.round((actual + 0.1) * 10) / 10)
    );
  };

  // Disminuir texto (mínimo 80%)
  const disminuirTexto = () => {
    setTamañoTexto(actual =>
      Math.max(0.8, Math.round((actual - 0.1) * 10) / 10)
    );
  };

  // Activar o desactivar alto contraste
  const alternarContraste = () => {
    setAltoContraste(actual => !actual);
  };

  // Activar o desactivar reducción de movimiento
  const alternarMovimiento = () => {
    setReducirMovimiento(actual => !actual);
  };

  return (
    <AccesibilidadContext.Provider
      value={{
        tema,
        tamañoTexto,
        altoContraste,
        reducirMovimiento,
        cambiarTema,
        aumentarTexto,
        disminuirTexto,
        alternarContraste,
        alternarMovimiento,
      }}
    >
      {children}
    </AccesibilidadContext.Provider>
  );
}

// Hook para utilizar la configuración en cualquier pantalla
export function useAccesibilidad() {
  const context = useContext(AccesibilidadContext);

  if (!context) {
    throw new Error(
      'useAccesibilidad debe utilizarse dentro de AccesibilidadProvider'
    );
  }

  return context;
}
