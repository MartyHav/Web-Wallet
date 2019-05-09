// Library Imports
import React from "react";

// Relative Imports
import { Information } from "../../../constants/type.js";
import Description from "../../inputs/description/index.js";

const CreateSeed = () => {
  return (
    <>
      <Description label="Seed Phrase" value="" placeholder="" />
      <Information>
        A Seed Phrase is a algorithmically generated password and provides full
        access to your account and assets.{" "}
        <strong>
          Store your seed in a safe location and do not share this with anyone
        </strong>
      </Information>
    </>
  );
};

export default CreateSeed;
