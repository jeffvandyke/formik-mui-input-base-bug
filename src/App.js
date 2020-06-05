import React from "react";
import "./styles.css";
import { Formik, Form, Field } from "formik";
import { InputBase } from "formik-material-ui";

export default function App() {
  return (
    <div className="App">
      <p>Bare input below - but try hitting Enter in the input...</p>
      <Formik
        initialValues={{ aField: "A Value" }}
        onSubmit={async () => {
          console.log("submitting...");
          await new Promise(r => setTimeout(r, 1000));
          console.log("submitted");
        }}
      >
        {formikProps => (
          <Form>
            <div style={{ border: "1px solid green" }}>
              <Field component={InputBase} name="aField" />
            </div>
            <button type="submit">Submit, this works</button>
            {formikProps.isSubmitting ? "Submitting" : "Not submitting"}
          </Form>
        )}
      </Formik>
    </div>
  );
}
