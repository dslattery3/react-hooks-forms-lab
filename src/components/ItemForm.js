import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({items, setItems}) {  
  const [itemName, setItemName] = useState('')
  const [itemCategory, setItemCategory] = useState('Produce')

  function handleItemChange(e){
    setItemName(e.target.value)
  }

  function handleCategoryChange(e){
    setItemCategory(e.target.value)
  }

  function onItemFormSubmit(e){
    e.preventDefault()
    
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }
      const newArr = [...items, newItem]
      setItems(newArr)
  }

  return (
    <form onSubmit={onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleItemChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleCategoryChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
