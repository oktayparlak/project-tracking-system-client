import React from "react";

import "./AcademicianTable.css";
function AcademicianTable() {
  return (
    <>
      <div className="left-section">
        <div className="container mt-5 mx-5">
          <div className="card">
            <div
              className="card-title"
              style={{ paddingLeft: "23px !important" }}
            >
              Mevcut Projelerim
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Proje ID</th>
                    <th scope="col">Başlangıç Tarihi</th>
                    <th scope="col">Proje İsmi</th>
                    <th scope="col">Detaylar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data 1</td>
                    <td>12 / 05 / 23</td>
                    <td>Mobile App</td>
                    <td>
                      <i
                        className="fa fa-eye"
                        aria-hidden="true"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Proje Detayları
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body m-5">
                  <iframe src="edit_form.html" width={600} height={400} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="container mt-5 mx-5">
          <div className="card">
            <div
              className="card-title"
              style={{ paddingLeft: "23px !important" }}
            >
              Yeni Başvurular
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Proje ID</th>
                    <th scope="col">Başvuru Tarihi</th>
                    <th scope="col">Proje İsmi</th>
                    <th scope="col">Detaylar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data 1</td>
                    <td>12 / 05 / 23</td>
                    <td>Mobile App</td>
                    <td>
                      <i
                        className="fa fa-eye"
                        aria-hidden="true"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Proje Detayları
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body m-5">
                  <iframe
                    src="application_form.html"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AcademicianTable;
