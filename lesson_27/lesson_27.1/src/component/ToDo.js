import React from "react";

const ToDo = () => {
  return (
    <div>
      <div
        id="myDIV"
        className="bg-customBg text-white text-center py-customPyHeader px-customPxHeader after:content-[''] after:table after:clear-both"
      >
        <h2 className="m-[5px] text-2xl font-bold text-center">
          My To Do List
        </h2>
        <input
          type="text"
          id="myInput"
          className="m-0 border-none rounded-none w-3/4 p-2.5 float-left text-base"
          placeholder="Title..."
        />
        <span className="">Add</span>
      </div>

      <ul id="myUL">
        <li>Hit the gym</li>
        <li>Pay bills</li>
      </ul>
    </div>
  );
};

export default ToDo;
