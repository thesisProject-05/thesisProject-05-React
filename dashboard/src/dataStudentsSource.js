export const studentsColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "student",
      headerName: "Student",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  export const studentsRows = [
    {
      id: 1,
      username: "rim ahmed",
      img: "/assets/person/person1.jpg",
      email: "remAhmed@gmail.com",
      status: "paid",
      age: 35,
    },
    {
      id: 2,
      username: "amal zakria",
      img: "/assets/person/person2.jpg",
      email: "ahmedZack@gmail.com",
      status: "notPaid",
      age: 21,
    },
    {
      id: 3,
      username: "sarah",
      img: "/assets/person/person3.jpg",
      email: "sarah@gmail.com",
      status: "pending",
      age: 15,
    },
    {
      id: 4,
      username: "Camila",
      img: "/assets/person/person4.jpg",
      email: "camila@gmail.com",
      status: "paid",
      age: 26,
    },
    {
      id: 5,
      username: "Madison Clark",
      img: "/assets/person/person5.jpg",
      email: "madison@gmail.com",
      status: "pending",
      age: 28,
    },
    {
      id: 6,
      username: "Alexander Hall",
      img: "/assets/person/person6.jpg",
      email: "alexander@gmail.com",
      status: "notPaid",
      age: 20,
    },
    {
      id: 7,
      username: "Nova Garcia",
      img: "/assets/person/person7.jpg",
      email: "nova@gmail.com",
      status: "paid",
      age: 30,
    },
    {
      id: 8,
      username: "Sebastian",
      img: "/assets/person/person8.jpg",
      email: "sebastian@gmail.com",
      status: "notPaid",
      age: 27,
    },
    {
      id: 9,
      username: "Olivia",
      img: "/assets/person/person1.jpg",
      email: "olivia@gmail.com",
      status: "active",
      age: 35,
    },
    {
      id: 10,
      username: "Charlotte",
      img: "/assets/person/person2.jpg",
      email: "charlotte@gmail.com",
      status: "notPaid",
      age: 21,
    },
    {
      id: 11,
      username: "Amelia",
      img: "/assets/person/person3.jpg",
      email: "amelia@gmail.com",
      status: "pending",
      age: 15,
    },
    {
      id: 12,
      username: "Camila",
      img: "/assets/person/person4.jpg",
      email: "camila@gmail.com",
      status: "active",
      age: 26,
    },
    {
      id: 13,
      username: "Madison Clark",
      img: "/assets/person/person5.jpg",
      email: "madison@gmail.com",
      status: "pending",
      age: 28,
    },
    {
      id: 14,
      username: "Alexander Hall",
      img: "/assets/person/person6.jpg",
      email: "alexander@gmail.com",
      status: "notPaid",
      age: 20,
    },
    {
      id: 15,
      username: "Nova Garcia",
      img: "/assets/person/person7.jpg",
      email: "nova@gmail.com",
      status: "active",
      age: 30,
    },
    {
      id: 16,
      username: "Sebastian",
      img: "/assets/person/person8.jpg",
      email: "sebastian@gmail.com",
      status: "notPaid",
      age: 27,
    },
  ];
  
  