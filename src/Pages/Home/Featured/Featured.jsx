import SectionTitles from "../../../Components/SectionTitle/SectionTitles";
import './Featured.css'
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitles
        subHeading={"check it out"}
        heading={"Featured item"}
      ></SectionTitles>

      <div className="md:flex justify-center items-center py-20 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some money</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ea
            sequi fugiat culpa debitis, ab quidem perspiciatis eum hic nihil,
            dolores obcaecati ut. Modi, maxime delectus. Impedit, velit
            cupiditate! Impedit at illo voluptatibus, ut cumque aliquid libero
            minima aliquam labore ea voluptatum fugiat, vitae unde id
            repudiandae. Explicabo, delectus nam?
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
