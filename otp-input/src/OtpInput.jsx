import React, { createRef, useState } from "react";

const OtpInput = () => {
  const numerOfInputs = 4;
  const [inputRefsArray] = useState(() =>
    Array.from({ length: numerOfInputs }, () => createRef())
  );

  inputRefsArray.map((ref) => console.log("check the value over here", ref));

  // console.log('inputRefsArrayinputRefsArray', inputRefsArray)
  const [inputValue, setInputValue] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    setInputValue({
      ...inputValue,
      [name]: value.replace(/[^0-9]/g, ""),
    });
  };

  return (
    <div className="">
      <input
        onChange={handleChange}
        value={inputValue.otp1}
        name="otp1"
        maxLength={1}
      />
      <input
        onChange={handleChange}
        value={inputValue.otp2}
        name="otp2"
        maxLength={1}
      />
      <input
        onChange={handleChange}
        value={inputValue.otp3}
        name="otp3"
        maxLength={1}
      />
      <input
        onChange={handleChange}
        value={inputValue.otp4}
        name="otp4"
        maxLength={1}
      />
    </div>
  );
};

export default OtpInput;
