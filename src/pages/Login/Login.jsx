import { useState } from "react";
import "./Login.css";

const INITIAL_STATE = {
  username: "",
  email: "",
};

const VALIDATION = {
  email: [
    {
      isValid: (value) => !!value,
      message: "Is required",
    },
    {
      isValid: (value) => /\S+@\S+\.\S+/.test(value),
      message: "Needs to be an email",
    },
  ],
  username: [
    {
      isValid: (value) => !!value,
      message: "Is required",
    },
  ],
};

const getDirtyFields = (form) =>
  Object.keys(form).reduce((acc, key) => {
    const isDirty = form[key] !== INITIAL_STATE[key];

    return { ...acc, [key]: isDirty };
  }, {});

const getErrorFields = (form) =>
  Object.keys(form).reduce((acc, key) => {
    if (!VALIDATION[key]) return acc;

    const errorsPerField = VALIDATION[key]

      .map((validation) => ({
        isValid: validation.isValid(form[key]),
        message: validation.message,
      }))
      .filter((errorPerField) => !errorPerField.isValid);

    return { ...acc, [key]: errorsPerField };
  }, {});

const Login = () => {
  const [form, setForm] = useState(INITIAL_STATE);

  const dirtyFields = getDirtyFields(form);

  const hasChanges = Object.values(dirtyFields).every((isDirty) => !isDirty);

  const errorFields = getErrorFields(form);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.id]: [e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const hasErrors = Object.values(errorFields).flat().length > 0;

    if (hasErrors) return;

    alert(
      `You have successfully logged in ${form.username} with email ${form.email}`
    );

    setForm(INITIAL_STATE);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Username: </label>
        <input
          value={form.username}
          onChange={handleChange}
          type="text"
          name="username"
          id="username"
        />
        {errorFields.username?.length ? (
          <span style={{ color: "red" }}>
            {errorFields.username[0].message}
          </span>
        ) : null}
      </div>
      <div>
        <label>Email: </label>
        <input
          value={form.email}
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
        />
        {errorFields.email?.length ? (
          <span style={{ color: "red" }}>{errorFields.email[0].message}</span>
        ) : null}
      </div>
      <button type="submit" disabled={hasChanges}>
        Submit
      </button>
    </form>
  );
};

export default Login;
