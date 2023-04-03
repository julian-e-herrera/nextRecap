import React from "react";

const DarkTheme = () => {
  return (
    <style jsx global>{`
      :root {
        --background-color: rgb(75, 70, 70);
        --link-color: rgb(196, 196, 96);
        --text-color: white;
      }
    `}</style>
  );
};

export default DarkTheme;
