import React, { useState, useEffect } from "react";
import "./AcademicianTable.css";

function AcademicianTable() {
  const [contentHeight, setContentHeight] = useState(0);

  // belli bir yükseklikten sonra scroll bar çıkarması için yazıldı
  useEffect(() => {
    const cardBody = document.getElementById("cardBody");
    if (cardBody) {
      setContentHeight(cardBody.scrollHeight);
    }
  }, [contentHeight]);

  return (
    
    <div className="container ">
      <div className="row">
{/* Sol Panel (Bu kısım eksik ve işlev eklemedim örnek olarak duruyor. ) */}
<div className="col-md-3 ml-auto">
  <div className="left-panel">
    <br />
    <br />
    <p className="academician-name" style={{ fontSize: "3em" }}>
      <i className="fas fa-university"></i> <b>Academician</b>
      <br />
      <br />Mehmet Burkay Kıraç
    </p>
    <button onClick={() => console.log("Ayarlar tıklandı")}>
      <i className="fa-sharp fa-solid fa-gear" aria-hidden="true" style={{ fontSize: "1.7em" }}></i>{" "}
      Ayarlar
    </button>
    <button onClick={() => console.log("Çıkış Yap tıklandı")}>
      <i className="fa-solid fa-right-from-bracket" aria-hidden="true" style={{ fontSize: "1.7em" }}></i>{" "}
      Çıkış Yap
    </button>
  </div>
</div>





        {/* Sol Bölüm (Left Section) */}
        <div className="left-section">
          <div className="card-container">
            <div className="card text-center ">
              <div
                className="card-title bg-primary text-white p-3 rounded fw-bold fs-5"
                style={{ paddingLeft: "23px !important" }}
              >
                Mevcut Projelerim
              </div>
              <div
              className="card-body"
              style={{
                maxHeight: "400px", // Scroll bar için maksimum yükseklik
                overflowY: contentHeight > 400 ? "scroll" : "auto", // Scrollbar kontrolü
              }}
              id="cardBody"
            >
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
                          data-bs-target="#exampleModalLeft"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sol Bölüm Modal */}
          <div
            className="modal fade"
            id="exampleModalLeft"
            tabIndex={-1}
            aria-labelledby="exampleModalLabelLeft"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabelLeft">
                    Proje Detayları Sol
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
                    src="edit_form_left.html"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Bölüm (Right Section) */}
        <div className="right-section">
          <div className="card-container">
            <div className="card text-center ">
              <div
                className="card-title bg-primary text-white p-3 rounded fw-bold fs-5"
                style={{ paddingLeft: "23px !important" }}
              >
                Yeni Başvurular
              </div>
              <div
              className="card-body"
              style={{
                maxHeight: "400px", // Scroll bar için maksimum yükseklik
                overflowY: contentHeight > 400 ? "scroll" : "auto", // Scrollbar kontrolü
              }}
              id="cardBody"
            >
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
                          data-bs-target="#exampleModalRight"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sağ Bölüm Modal */}
          <div
            className="modal fade"
            id="exampleModalRight"
            tabIndex={-1}
            aria-labelledby="exampleModalLabelRight"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabelRight">
                    Proje Detayları Sağ
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
                    src="edit_form_right.html"
                    width={600}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
);
  }

export default AcademicianTable;