import React from "react";

const SimpleForm2 = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // console.log('shanto');
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <form onSubmit={handleClick}>
      <input type="text" name="name" placeholder="Enter your name" />
      <br />
      <input type="email" name="email" placeholder="Enter your name" />
      <br />
      <input type="submit" value="submit" />
    </form>
  );
};

export default SimpleForm2;
