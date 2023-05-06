export async function getUsers() {
  // Fetch data from an external API endpoint
  const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
  if (!res.ok) throw new Error('failed to fetch data');
  return res.json();
}