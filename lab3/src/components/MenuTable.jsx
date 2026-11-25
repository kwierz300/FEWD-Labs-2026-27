import Accordion from "react-bootstrap/Accordion";
import FoodItem from "./FoodItem";
import MenuCategoryRow from "./MenuCategoryRow";

const MenuTable = ({ items, filterText, showUnavailable }) => {
    const rows = [];
    let lastCategory = null;
    const search = filterText.toLowerCase();
    const filteredItems = items.filter(item =>
        (showUnavailable || item.available === "yes") &&
        (item.name.toLowerCase().includes(search) ||
         item.description.toLowerCase().includes(search))
    ).sort((a, b) => a.category.localeCompare(b.category));

    filteredItems.forEach(menuItem => {
        if (menuItem.category !== lastCategory) {
            rows.push(
                <MenuCategoryRow category={menuItem.category} key={menuItem.category} />
            );
        }
        rows.push(
            <Accordion.Item eventKey={menuItem.id} key={menuItem.id}>
                <Accordion.Header>
                    {menuItem.name}
                    {menuItem.available !== "yes" && (
                        <span className="text-secondary ms-2">(Unavailable)</span>
                    )}
                </Accordion.Header>
                <Accordion.Body>
                    <FoodItem food={menuItem} />
                </Accordion.Body>
            </Accordion.Item>
        );
        lastCategory = menuItem.category;
    });

    return rows.length > 0 ? <Accordion>{rows}</Accordion> : <p>No matching items.</p>;
};

export default MenuTable;
