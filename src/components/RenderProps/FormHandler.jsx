/* import { useState } from "react";

const FormHandler = ({ initialValues = {}, onSubmit, children }) => {
  const [value, setValue] = useState(initialValues);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return children({ value, handelChange, handelSubmit });
};

export default FormHandler;
 */

import { useState } from "react";

const FormHandler = ({ initialValues = {}, onSubmit, children }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(values);
  };

  return children({ values, handleChange, handleSubmit });
};

export default FormHandler;