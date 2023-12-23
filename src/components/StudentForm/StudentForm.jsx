import React from "react";
import { useForm, Controller } from "react-hook-form";

function StudentForm() {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Form submit işlemleri burada gerçekleştirilebilir
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label htmlFor="projectName" className="form-label">
          Proje İsmi
        </label>
        <input
          type="text"
          className="form-control"
          id="projectName"
          placeholder="Project Name"
          name="projectName"
          {...register("projectName")}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="projectDescription" className="form-label">
          Proje Açıklaması
        </label>
        <textarea
          className="form-control"
          id="projectDescription"
          placeholder="Project Description"
          name="projectDescription"
          {...register("projectDescription")}
        ></textarea>
      </div>

      <div className="mb-5">
        <label htmlFor="projectType" className="form-label">
          Project Türü
        </label>
        <select
          className="form-select"
          id="projectType"
          name="projectType"
          {...register("projectType")}
        >
          <option value="design">Design Project</option>
          <option value="bitirme">Bitirme Ödevi</option>
          <option value="tubitak">Tübitak</option>
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="advisor" className="form-label">
          Danışman Hoca Seçiniz
        </label>
        <select className="form-select" id="advisor" {...register("advisor")}>
          <option value="" disabled>
            Danışman Hoca Seçiniz
          </option>
          <option value="1">Ahmet Nusret Toprak</option>
          <option value="2">Ömür Şahin</option>
          <option value="3">Tayyip Özcan</option>
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="projectStartDate" className="form-label">
          Proje Başlangıç Tarihi
        </label>
        <input
          type="date"
          className="form-control"
          id="projectStartDate"
          name="projectStartDate"
          {...register("projectStartDate")}
        />
      </div>

      <div className="submit">
        <button type="submit" className="btn btn-primary submit">
          Proje Başvurusu Yap
        </button>
      </div>
    </form>
  );
}

export default StudentForm;
