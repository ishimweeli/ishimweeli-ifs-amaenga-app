import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "GS INSTITUT FILIPPO SMALDONE",
          "INCLUSIVE SCHOOL LOCATED IN NYARUGENGE/NYAMIRAMBO",
        "WORKING ON HELPING ALL STUDENTS ESPECIALLY DEAFS",
          "TO ACCESS QUALITY EDUCATION",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
