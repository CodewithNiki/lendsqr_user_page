import userImage from "../public/userImage.svg"
interface User {
    id: string;
    name: string;
    email: string;
    password: number;
    role: "user" | "admin";
    image: string;
  }
  
  const Users: User[] = [
    { id: "111", name: "John Doe", email: "johnDoe@xyz.com", password: 1232, role: "user", image: userImage },
    { id: "112", name: "Jane Doe", email: "janeDoe@xyz.com", password: 1234, role: "user", image: userImage },
    { id: "113", name: "Jenny Doe", email: "jennyDoe@xyz.com", password: 1235, role: "admin", image: userImage },
    { id: "114", name: "Jude Doe", email: "judeDoe@xyz.com", password: 2222, role: "admin", image: userImage },
  ];
  
  export { Users };
  