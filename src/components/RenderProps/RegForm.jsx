import { useState } from "react";

const RegForm = ({ onSubmit, initialValues = {}, children }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  const reset = () => setValues(initialValues);

  return children({ values, handleChange, handleSubmit, reset });
};

export default RegForm;
