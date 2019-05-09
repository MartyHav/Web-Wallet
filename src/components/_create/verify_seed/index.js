// Library Imports
import React from "react";

// Relative Imports
import { Information } from "../../../constants/type.js";
import Description from "../../inputs/description/index.js";

const VerifySeed = ({ name, value, onChange, error, label, ...rest }) => {
  return (
    <>
      <Description
        label={label}
        placeholder="Enter your seed"
        name={name}
        value={value}
        error={error}
        onChange={onChange}
        rest={rest}
      />
      <Information>
        Please verify your Seed Phrase this will ensure that your Seed Phrase
        has been correctly backed up.{" "}
        <strong>
          Store your seed in a safe location and do not share this with anyone
        </strong>
      </Information>
    </>
  );
};

export default VerifySeed;
