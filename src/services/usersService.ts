import axios from "axios";

let api: string = "https://jsonplaceholder.typicode.com/users";

export function addUser(newUser: any) {
  return axios.post(api, newUser);
}
