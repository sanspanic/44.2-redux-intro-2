import React, { useState } from "react";

const Form = ({ addMeme }) => {
  const initialFormData = {
    src: "",
    text: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMeme({ ...formData });
    setFormData(initialFormData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex border-2 pt-10 mx-auto flex-col items-center"
    >
      <div className="form-input">
        <label for="text">Text</label>
        <input
          className="rounded-lg m-1"
          id="text"
          name="text"
          type="text"
          value={formData.text}
          onChange={handleChange}
          placeholder="URL of image"
        ></input>
      </div>
      <div>
        <label for="src">URL</label>
        <input
          className="rounded-lg m-1"
          id="src"
          name="src"
          type="text"
          value={formData.src}
          placeholder="Image URL"
          onChange={handleChange}
        ></input>
      </div>
      <button className="px-3 py-2 bg-yellow-300 rounded-lg border-yellow-600 border-2">
        Submit
      </button>
    </form>
  );
};

export default Form;
