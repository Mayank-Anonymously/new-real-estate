import axios from "axios";
import { HOST } from "../static";

export const loginApi = async (
  email,
  password,
  router,
  setErros,
  setLoading
) => {
  setLoading(true);
  try {
    const data = {
      email: email,
      password: password,
    };
    setLoading(true);

    axios
      .post(`${HOST}auth/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setLoading(false);

        router.navigate("Root");
      })
      .catch((error) => {
        if (error.response) {
          setLoading(false);

          setErros(error.response.data.message);
        } else {
          setLoading(false);

          setErros(error.message);
        }
      });
  } catch (error) {
    console.error("Error fetching county listings:", error);
  }
};
