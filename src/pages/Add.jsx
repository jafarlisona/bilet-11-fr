import React, { useState } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();
  function submitData() {
    fetch("http://localhost:3000/services", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, icon }),
    }).then((x) => navigate("/"));
  }

  return (
    <section className="add">
      <Formik
        initialValues={{ title: "", description: "", icon: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Required";
          }
          if (!values.description) {
            errors.description = "Required";
          }
          if (!values.icon) {
            errors.icon = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={submitData}>
            <div>
              <span>
                Title:
                <input
                  type="title"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                {errors.title && touched.title && errors.title}
              </span>
            </div>
            <div>
              <span>
                Description:
                <input
                  type="description"
                  name="description"
                  onChange={(e) => handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
                {errors.description &&
                  touched.description &&
                  errors.description}
              </span>
            </div>
            <div>
              <span>
                Description:
                <input
                  type="icon"
                  name="icon"
                  onChange={(e) => handleChange}
                  onBlur={handleBlur}
                  value={values.icon}
                />
                {errors.icon && touched.icon && errors.icon}
              </span>
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </section>
  );
}

export default Add;
