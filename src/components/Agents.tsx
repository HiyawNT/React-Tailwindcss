import AgentsImg from "../assets/Agents.jpg";

const Agents = () => {
  return (
    <section className="bg-gray-200">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2 mb-6 lg:mb-0 lg:mr-9">
          {" "}
          <img
            className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl mt-2"
            src={AgentsImg}
            alt="glasses photo"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="flex items-center -mx-2" style={{ color: "#43A6C6" }}>
            <span className="mx-2 text-2xl">Our Agents</span>
          </p>

          <div className="lg:max-w-lg">
            <h1
              className="text-3xl tracking-wide dark:text-white lg:text-4xl font-medium"
              style={{ color: "#43A6C6" }}
            >
              Trusted agents
              <span className="pl-2" style={{ color: "#000" }}>
                in the real estate business{" "}
              </span>{" "}
            </h1>

            <div className="mt-5 space-y-5">
              <p
                className="flex items-center -mx-2"
                style={{ color: "#43A6C6" }}
              >
                <span
                  className="mx-2 text-lg tracking-wide font-light  text-gray-500 "
                  style={{ maxWidth: "70%" }}
                >
                  Whether you are looking to rent, buy or sell your home,
                  Ziccow's directrory of local real estate agents and brokers
                  connects you with professionals who specialize in buying,
                  selling, foreclosures, or relocation - among many other
                  options. Alternatively, you could work with a local agent or
                  real estate broker who provides an entire suite of buying and
                  selling services.
                </span>
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Button
                </button> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agents;
