import React from "react";

const Loading = () => {
  return (
    <div className={'Loading_container'}>
      <div className={'lds_ellipsis'}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
