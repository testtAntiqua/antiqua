import React, { useEffect, useState } from "react";
import { useRef } from "react";

const UseDropDown = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const openDropDown = () => {
    setIsDropDownVisible((prev) => {
      return !prev;
    });
  };

  const closeDropDown = () => {
    setIsDropDownVisible((prev) => {
      return !prev;
    });
  };

  const dropDownRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (dropDownRef.current !== null) {
      if (dropDownRef && !dropDownRef.current.contains(e.target)) {
        setIsDropDownVisible(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return { dropDownRef, isDropDownVisible, openDropDown, closeDropDown };
};

export default UseDropDown;
