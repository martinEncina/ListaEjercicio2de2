import FilterByCategory from "./FilterByCategory/FilterByCategory";
import FilterByname from "./FilterByName/FilterByName";


function Filter ({ handleFilter, handleCategory }){

           return (
        <form>
            <FilterByname handleFilter={handleFilter}/>
            <FilterByCategory handleCategory={handleCategory}/>
        </form>
    )
}

export default Filter;