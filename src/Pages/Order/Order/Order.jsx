import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTabls from "../OrderTabls/OrderTabls";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Restaurant | Order Food</title>
      </Helmet>
      <Cover img={orderCover} title="Order Food"></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTabls items={salad}></OrderTabls>
        </TabPanel>
        <TabPanel>
          <OrderTabls items={pizza}></OrderTabls>
        </TabPanel>
        <TabPanel>
          <OrderTabls items={soup}></OrderTabls>
        </TabPanel>
        <TabPanel>
          <OrderTabls items={dessert}></OrderTabls>
        </TabPanel>
        <TabPanel>
          <OrderTabls items={offered}></OrderTabls>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
