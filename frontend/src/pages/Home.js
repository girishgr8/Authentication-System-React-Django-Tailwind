import { Carousel } from "flowbite-react";

const Home = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
          alt="carousel-1"
        />
        <img
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
          alt="carousel-2"
        />
        <img
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
          alt="carousel-3"
        />
        <img
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
          alt="carousel-4"
        />
        <img
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
          alt="carousel-5"
        />
      </Carousel>
    </div>
  );
};

export default Home;
