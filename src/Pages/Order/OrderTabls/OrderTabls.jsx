import FoodCard from '../../../Components/FoodCard/FoodCard';

const OrderTabls = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10">
        {
                items.map(item => <FoodCard
                key={item._id}
                item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTabls;