import React from "react";

const FormAction2 = () => {
  const handleClicked = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };
  return (
    <div>
      <form action={handleClicked}>
        <input type="text" name="name" placeholder="name" />
        <br />

        <input type="email" name="email" placeholder="name" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default FormAction2;
