import { Guest } from "@/models/objects/types";

/**
 * Register a guest using an API.
 * @param {Guest} guest - An object containing guest information.
 * @returns {Promise<any>} A promise that resolves with the API response, or rejects with an error.
 * @throws Will throw an error if there's an issue with the API call or the response is not ok.
 */
const registerGuest = async (guest: Guest): Promise<Guest> => {
  try {
    const response = await fetch(
      "https://localhost:7115/api/Huespedes/CheckIn",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(guest),
      }
    );

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        "Error al registrar el huésped. Por favor, inténtalo de nuevo."
      );
    }
  } catch (error) {
    console.error("Error al llamar al API:", error);
    throw error;
  }
};

/**
 * Perform a guest checkout using an API.
 * @param {string} guestId - The ID of the guest to be checked out.
 * @returns {Promise<void>} A promise that resolves if the checkout is successful, or rejects with an error.
 * @throws Will throw an error if there's an issue with the API call or the response is not ok.
 */
const checkoutGuest = async (guestId: string) => {
  try {
    const response = await fetch(
      `https://localhost:7115/api/Huespedes/CheckOut/${guestId}`,
      {
        method: "PUT",
      }
    );

    if (!response.ok) {
      throw new Error(
        "Error al realizar el checkout. Por favor, inténtalo de nuevo."
      );
    }
  } catch (error) {
    console.error("Error al llamar al API:", error);
    throw error;
  }
};

/**
 * Fetches the available rooms from the backend.
 * @returns {Promise<number[]>} A promise that resolves to an array of integers representing the available room numbers.
 * @throws {Error} If the API call fails or the response is not ok.
 */
const fetchAvailableRooms = async () => {
  try {
    const response = await fetch("https://localhost:7115/api/Habitaciones");

    if (response.ok) {
      const availableRooms = await response.json();
      return availableRooms;
    } else {
      throw new Error(
        "Error al cargar las habitaciones disponibles. Por favor, inténtalo de nuevo."
      );
    }
  } catch (error) {
    console.error("Error al llamar al API:", error);
    throw error;
  }
};

/**
 * Fetch the current guests from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of guest objects when the API call is successful.
 * @throws {Error} An error if the API call fails.
 */
const fetchCurrentHuespedes = async () => {
  try {
    const response = await fetch("https://localhost:7115/api/Huespedes");

    if (response.ok) {
      const guests = await response.json();
      console.log(guests);
      return guests;
    } else {
      throw new Error(
        "Error al cargar los huespedes actuales. Por favor, inténtalo de nuevo."
      );
    }
  } catch (error) {
    console.error("Error al llamar al API:", error);
    throw error;
  }
};

export {
  registerGuest,
  checkoutGuest,
  fetchAvailableRooms,
  fetchCurrentHuespedes,
};
