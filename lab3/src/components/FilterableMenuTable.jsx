import { useState } from "react";
import SearchBar from "./SearchBar";
import MenuTable from "./MenuTable";

const FilterableMenuTable = ({ items }) => {
    const [filterText, setFilterText] = useState("");
    const [showUnavailable, setShowUnavailable] = useState(false);

    return (
        <div>
            <SearchBar
                filterText={filterText}
                onFilterTextChange={setFilterText}
                showUnavailable={showUnavailable}
                onShowUnavailableChange={setShowUnavailable}
            />
            <MenuTable items={items} filterText={filterText} showUnavailable={showUnavailable} />
        </div>
    );
};

export default FilterableMenuTable;
