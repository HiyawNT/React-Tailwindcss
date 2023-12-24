function CallToAction() {
  const sectionStyle = {
    backgroundColor: "#152238",
  };

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    gap: "20px",
  };

  return (
    <section
      style={sectionStyle}
      className="text-white py-16 px-4 mx-auto items-center justify-center"
    >
      <div className="container mx-auto" style={gridContainerStyle}>
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold " style={{ maxWidth: "60%" }}>
            Enjoy quality lifes with our hosting services
          </h2>
        </div>
        <div>
          <p className="text-lg" style={{ maxWidth: "50%" }}>
            Sign up now to receive updates on new listings and exclusive offers.
            Explore our listings and discover the perfect home for you. Explore
            our listings and discover the perfect home for you. Explore our
            listings and discover the perfect home for you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
