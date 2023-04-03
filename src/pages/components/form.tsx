import { Guest } from "@/models/objects/types";
import styles from "@/styles/Home.module.css";
import {
  FunctionComponent,
  ChangeEvent,
  FormEvent,
  useState,
  useEffect,
} from "react";
import { fetchAvailableRooms } from "../api";

interface Props {
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  guest: Guest;
  rooms: Set<string>;
}

const GuestForm: FunctionComponent<Props> = ({
  handleSubmit,
  handleChange,
  guest,
  rooms,
}) => {
  const [availableRooms, setAvailableRooms] = useState<number[]>([]);
  const [hasError, setError] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const rooms = await fetchAvailableRooms();
        setAvailableRooms(rooms);
      } catch (error) {
        setError(`Error al cargar las habitaciones: ${error}`);
      }
    })();
  }, [rooms]);

  return (
    <form onSubmit={handleSubmit} className={styles.guestform}>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={guest.nombre}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Identificación:
        <input
          type="text"
          name="identificacion"
          value={guest.identificacion}
          onChange={handleChange}
          required
        />
      </label>
      <div className="form-group">
        <label htmlFor="room">Habitación asignada</label>
        {hasError !== "" && <p>{hasError}</p>}
        <select
          id="room"
          name="habitacionId"
          value={guest.habitacionId}
          required
          disabled={!availableRooms}
          onChange={handleChange}
        >
          {availableRooms?.map((room) => (
            <option key={room} value={room}>
              {room}
            </option>
          ))}
        </select>
      </div>
      <label>
        Ingreso:
        <input
          type="datetime-local"
          name="ingreso"
          value={guest.ingreso}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Salida:
        <input
          type="datetime-local"
          name="salida"
          value={guest.salida ?? ""}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Registrar</button>
    </form>
  );
};

export default GuestForm;
