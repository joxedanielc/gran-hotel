import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { registerGuest, checkoutGuest, fetchCurrentHuespedes } from "./api";
import { Guest, INITIAL_GUEST } from "@/models/objects/types";
import styles from "@/styles/Home.module.css";
import GuestForm from "./components/form";
import GuestList from "./components/guestlist";

const GranHotel = () => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [guest, setGuest] = useState<Guest>(INITIAL_GUEST);
  const [rooms, setRooms] = useState<Set<string>>(new Set());
  const [error, setError] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const guests = await fetchCurrentHuespedes();
        setGuests(guests);
      } catch (error) {
        setError(`Error al cargar las habitaciones: ${error}`);
      }
    })();
  }, [rooms]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setGuest({ ...guest, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!rooms.has(guest.habitacionId)) {
      try {
        delete guest.id;
        if (guest.salida === "") {
          delete guest.salida;
        }
        const result = await registerGuest(guest);
        setGuests([...guests, result]);
        setRooms(new Set([...rooms, result.habitacionId]));
        setGuest(INITIAL_GUEST);
      } catch (error: any) {
        alert(error.message);
      }
    } else {
      alert("La habitación ya está ocupada.");
    }
  };

  const handleCheckout = async (guestId: string, room: string) => {
    try {
      await checkoutGuest(guestId);
      setRooms(new Set(Array.from(rooms).filter((r) => r !== room)));
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.maintitle}>Registro de huéspedes - Gran Hotel</h1>
      <GuestForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        guest={guest}
        rooms={rooms}
      />
      <GuestList
        handleCheckout={handleCheckout}
        guests={guests}
        error={error}
      />
    </div>
  );
};

export default GranHotel;
