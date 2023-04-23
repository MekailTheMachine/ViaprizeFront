import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold mb-4">About Viaprize</h1>
        <p className="text-lg text-center px-5">
          Viaprize is a decentralized platform for funding public goods. Our mission is to empower communities
          by providing a transparent and efficient way to contribute to projects that benefit everyone.
        </p>
        <div className="text-center mt-8 bg-secondary p-10">
          <h2 className="text-3xl my-0">Our Vision</h2>
          <p className="text-neutral">
            We believe in a world where communities can thrive together. Through our platform, we aim to create
            a positive impact by supporting projects that promote community building and address the needs of the people.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
