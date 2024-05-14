import brainwave from "../assets/brainwave.png";
import ecomShop from "../assets/ecom-shop.png";
import "../styles/projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <div className="projects-list">
        <h3>My Projects</h3>
        <div className="project-item">
          <a href="https://react-brainwave.netlify.app/">
            <img src={brainwave} alt="" />
          </a>
          <span>
            {" "}
            <b>Brainwave</b> Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Ad deleniti ut repellat consequatur accusamus temporibus
            suscipit vel consectetur accusantium cumque, magni id perspiciatis
            rerum aut repellendus voluptatum? Nam, eaque eligendi?{" "}
          </span>
        </div>
        <div className="project-item">
          <a href="https://project-ecom-shop.netlify.app/">
            <img src={ecomShop} alt="" />
          </a>
          <span>
            {" "}
            <b>Ecommerce Shop</b> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ratione recusandae voluptates fugit. Molestias
            doloremque aliquid facere, molestiae quidem minima quibusdam
            voluptate similique voluptas autem voluptatem distinctio quisquam
            ullam rem iusto.{" "}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
