import React from "react";
import "./StudentForm.css";

function Student() {
  return (
    <div>
      <div className="col-md-3 ml-0">
        <div className="left-panel text-center">
          <br />
          <br />
          <p className="academician-name" style={{ fontSize: "2em" }}>
            <i className="fas fa-university"></i> <b>Student</b>
            <br />
            <br />
            Mehmet Burkay Kıraç
          </p>

          <button
            onClick={() => console.log("Çıkış Yap tıklandı")}
            className="btn btn-primary"
            style={{
              background:
                "linear-gradient(30deg, rgba(94, 174, 245, 0.7), #E1DBDB)",
              border: "none",
            }}
          >
            <i
              className="fa-solid fa-right-from-bracket"
              aria-hidden="true"
              style={{ fontSize: "1.7em" }}
            ></i>{" "}
            Çıkış
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-title">My Projects</div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Project ID</th>
                <th scope="col">Starting Date</th>
                <th scope="col">Project Name</th>
                <th scope="col">Consulting Academician</th>
                <th scope="col">Approving Situation</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data 1</td>
                <td>12 / 05/ 23</td>
                <td>AcademicianAndStudentMS</td>
                <td>Ömür Şahin</td>
                <td>Waiting</td>
                <td>
                  <i
                    className="fa fa-eye"
                    aria-hidden="true"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  />
                </td>
              </tr>
              <tr>
                <td>Data 2</td>
                <td>19 / 11/ 23</td>
                <td>Mobile App</td>
                <td>Ahmet Nusret Toprak</td>
                <td>Waiting</td>
                <td>
                  <i
                    className="fa fa-eye"
                    aria-hidden="true"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  />
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Student;
