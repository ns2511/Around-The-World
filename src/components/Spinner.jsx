import React from "react";

const Spinner = () => {
  return (
    <div style={{margin:"auto"}} class="text-center">
      <div style={{width:"7rem", height:"7rem"}} class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
