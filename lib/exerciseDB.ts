import axios from "axios";
import { rapidApiKey } from "../constants";

const BASE_URL = "https://exercisedb.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Key": rapidApiKey,
  "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
};

// Fetch exercises by body part
export const fetchExercisesByBodypart = async (bodyPart: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/exercises/bodyPart/${bodyPart}`,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching exercises by body part:", error);
    return [];
  }
};

// Fetch exercise details by ID
export const fetchExerciseDetails = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/exercises/exercise/${id}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching exercise details:", error);
    return null;
  }
};
