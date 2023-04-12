import React from "react";
const Arraysmap = () => {
  const Students = [
    {
      name: "jay",
      email: "jay@gmail.com",
      mno: "7048303687",
      Address: [
        { Hno: "21", SocName: "Khodiyar Krupa", City: "Surat" },
        { Hno: "21", SocName: "Khodiyar Krupa", City: "Surat" },
        { Hno: "21", SocName: "Khodiyar Krupa", City: "Surat" },
        { Hno: "21", SocName: "Khodiyar Krupa", City: "Surat" },
      ]
    },
    {
      name: "fenil",
      email: "fenil@gmail.com",
      mno: "7048303687",
      Address: [
        { Hno: "21", SocName: "Khodiyar Krupa", City: "Surat" },
        { Hno: "21", SocName: "Khodiyar Krupa", City: "Surat" },
        { Hno: "21", SocName: "Khodiyar Krupa", City: "Surat" },
        { Hno: "21", SocName: "Khodiyar Krupa", City: "Surat" },
      ]
    },  
    {
      name: "yash",
      email: "yash@gmail.com",
      mno: "7048303687",
      Address: [
        { Hno: "21", SocName: "Khodiyar Krupa", City: "Surat" },
        { Hno: "21", SocName: "Khodiyar Krupa", City: "Surat" },
        { Hno: "21", SocName: "Khodiyar Krupa", City: "Surat" },
        { Hno: "21", SocName: "Khodiyar Krupa", City: "Surat" },
      ]
    },
  ];

  return (
    <div className="app">
      <h1>ITS Array With MAP Function</h1>
      <table border="1 solid" bordercolor="black">
        <tbody>
          <tr>
          <td>Sno</td>

            <td>name</td>
            <td>email</td>
            <td>mobileNumber</td>
            <td>Address</td>
          </tr>
          {Students.map((data, i) =>
            data.mno === "7048303687" ? (
              <tr key={i}>
                                <td>{i+1}</td>

                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.mno}</td>
                <td>
                  <table>
                    <tbody>
                      {data.Address.map((item, u) => {
                        return (
                          <tr key={u}>
                            <td>{item.Hno}</td>
                            <td>{item.SocName}</td>
                            <td>{item.City}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Arraysmap;
