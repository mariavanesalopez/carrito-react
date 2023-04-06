import axios from "axios";

export const productInstance = axios.create({
  baseURL: "http://localhost:5070/products",
//   headers: {
//     "Authorization barer": "ASDsadasd122312DXASDasd",
//     "Content-Type": "aplication json",
//   },
});