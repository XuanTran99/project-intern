export const base_url = "http://localhost:5000/api/";
// export const base_url = "https://cooperative-lion-sneakers.cyclic.app/api/";
const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;
// hj
export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};
