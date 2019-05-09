// Library Imports
import React from "react";

// Relative Imports
import { Information } from "../../../constants/type.js";
import Description from "../../inputs/description/index.js";

const VerifySeed = () => {
  return (
    <>
      <Description label="Seed Phrase" value="" placeholder="Enter your seed" />
      <Information>
        Please verify your Seed Phrase this will ensure that your Seed Phrase
        has been correctly backed up.
        <strong>
          Store your seed in a safe location and do not share this with anyone
        </strong>
      </Information>
    </>
  );
};

export default VerifySeed;
