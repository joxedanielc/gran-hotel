import { Guest } from "@/models/objects/types";
import styles from "@/styles/Home.module.css";
import { FunctionComponent, ChangeEvent, FormEvent } from "react";

interface Props {
  guests: Guest[];
  handleCheckout: (guestId: string, room: string) => void;
  error: string;
}

const GuestList: React.FC<Props> = ({ guests, handleCheckout, error }) => {
  return (
    <div className={styles.guestlist}>
      {error !== "" && <p>{error}</p>}
      <h2>Lista de Huéspedes</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Identificación</th>
            <th>Habitación</th>
            <th>Ingreso</th>
            <th>Salida</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest, index) => (
            <tr key={index}>
              <td>{guest.nombre}</td>
              <td>{guest.identificacion}</td>
              <td>{guest.habitacionId}</td>
              <td>{new Date(guest.ingreso).toLocaleString()}</td>
              <td>
                {guest.salida && guest.salida !== null
                  ? new Date(guest.salida).toLocaleString()
                  : ""}
              </td>
              <td>
                {guest.salida !== undefined && guest.salida === null ? (
                  <button
                    onClick={() =>
                      handleCheckout(guest.id ?? "", guest.habitacionId)
                    }
                  >
                    Checkout
                  </button>
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuestList;
