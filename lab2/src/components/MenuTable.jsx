import Accordion from "react-bootstrap/Accordion";
import FoodItem from "./FoodItem";
import MenuCategoryRow from "./MenuCategoryRow";

const MenuTable = ({ items }) => {
    const rows = [];
    let lastCategory = null;
    const sortedItems = items
        .filter(item => item.available === "yes")
        .sort((a, b) => a.category.localeCompare(b.category));

    sortedItems.forEach(menuItem => {
        if (menuItem.category !== lastCategory) {
            rows.push(
                <MenuCategoryRow
                    category={menuItem.category}
                    key={menuItem.category}
                />
            );
        }

        rows.push(
            <Accordion.Item eventKey={menuItem.id} key={menuItem.id}>
                <Accordion.Header>{menuItem.name}</Accordion.Header>
                <Accordion.Body>
                    <FoodItem food={menuItem} />
                </Accordion.Body>
            </Accordion.Item>
        );

        lastCategory = menuItem.category;
    });

    return <Accordion>{rows}</Accordion>;
};

export default MenuTable;
