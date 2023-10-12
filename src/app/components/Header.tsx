import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <section className="h-[calc(100vh-56px)] w-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        Header
      </div>
    </section>
  );
};

export default Header;
