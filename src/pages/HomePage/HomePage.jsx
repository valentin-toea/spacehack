import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePlatform } from "../../redux/platformSlice";

const HomePage = () => {
  const selectedPlatform = useSelector((state) => state.platform.value);
  const dispatch = useDispatch();

  return (
    <div>
      <select
        onChange={(e) => dispatch(changePlatform(e.target.value))}
        value={selectedPlatform}
      >
        <option value="Facebook">Facebook</option>
        <option value="Instagram">Instagram</option>
        <option value="Twitter">Twitter</option>
      </select>
    </div>
  );
};

export default HomePage;
