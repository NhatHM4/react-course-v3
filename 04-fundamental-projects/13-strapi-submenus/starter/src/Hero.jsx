const Hero = ({ datalink }) => {
  return (
    <div className={`${!datalink.hoverFlag ? "submenu" : ""}`}>
      <h5>{datalink.page}</h5>
      <div className="hero-container ">
        {datalink.links &&
          datalink.links.map((link) => {
            return (
              <div key={link.id}>
                <a href={link.url}>
                  {link.icon} {link.label}
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Hero;
