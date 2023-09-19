import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function AddItem({ addOneItem }) {
  const validationSchema = Yup.object().shape({
    newTask: Yup.string()
      .trim()
      .required("Task is required")
      .matches(/^[a-zA-Z0-9\s]*$/, "Only letters, numbers, and spaces are allowed."),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newTodo = {
      task: values.newTask,
      
      status: "open",
      id: crypto.randomUUID(),
    };
    addOneItem(newTodo);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ newTask: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            type="text"
            name="newTask"
            placeholder="Enter a new task"
          />
          <ErrorMessage name="newTask" component="div" className="error" />

          <button type="submit">Add</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddItem;
