import axios from "axios";

export const getUsers = async() =>{
  // Fetch data from an external API endpoint
  const res = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
  if (!res.data) throw new Error('failed to fetch data');
  return res.data;
}