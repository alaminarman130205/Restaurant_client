// import { useEffect, useState } from "react";
import SectionTitles from "../../../Components/SectionTitle/SectionTitles";
import Menuitem from "../../Shared/MenuItem/Menuitem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === 'popular')

    // const[menu, setMenu] = useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=> res.json())
    //     .then(data =>{
    //         const popularItems = data.filter(item => item.category ==='popular');
    //         setMenu(popularItems)})
    // },[])
    
  return (
    <section className="mb-12">
      <SectionTitles
        heading={"From our menu"}
        subHeading={"Popular item"}
      ></SectionTitles>

      <div className="grid md:grid-cols-2 gap-10">
        {
            popular.map(item => <Menuitem
            key={item._id}
            item={item}
            ></Menuitem>)
        }

      </div>
    </section>
  );
};

export default PopularMenu;
