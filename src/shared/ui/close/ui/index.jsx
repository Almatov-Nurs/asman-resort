"use client";
const Close = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} className={`icon ${props.className}`}>
      <path d="M1.00015 1L19 19M18.9999 1L1 19" stroke="white" strokeLinecap="round"/>
    </svg>
  );
};

export default Close;