import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitles from '../../../Components/SectionTitle/SectionTitles';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const dessert  = menu.filter(item => item.category === 'dessert')
    const soup  = menu.filter(item => item.category === 'soup')
    const salad  = menu.filter(item => item.category === 'salad')
    const pizza= menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Restaurant | Menu</title>
            </Helmet>
            <Cover img={menuImage} title="Our menu"></Cover>
            <SectionTitles
            subHeading="don't miss"
            heading="today's offer"
            ></SectionTitles>

            <MenuCategory
            key={offered._id}
            items={offered}>
            </MenuCategory>

            <Cover img={dessertImg} title="Our menu"></Cover>


            <MenuCategory
            key={offered._id}
            items={offered}>
            </MenuCategory>

            <Cover img={soupImg} title="Our menu"></Cover>


            <MenuCategory
            key={offered._id}
            items={salad}>
            </MenuCategory>

            <Cover img={saladImg} title="Our menu"></Cover>


            <MenuCategory
            key={offered._id}
            items={pizza}>
            </MenuCategory>

            <Cover img={pizzaImg} title="Our menu"></Cover>


            <MenuCategory
            key={offered._id}
            items={soup}>
            </MenuCategory>

            <Cover img={soupImg} title="Our menu"></Cover>

            <MenuCategory
            key={offered._id}
            items={dessert}>
            </MenuCategory>

            <Cover img={dessertImg} title="Our menu"></Cover>
        </div>
    );
};

export default Menu;