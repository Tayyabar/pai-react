import React from "react";

const InputText = () => {
  console.log("inside InputText");
  return (
    <>
      <main>
        <input type="text" required={false} />
        FirstName
      </main>
    </>
  );
};

export default InputText;
