import React from 'react';
import { useState } from 'react';

const Categories = ({ items}) => {
  const [activeItem, setActiveItem] = useState(null);
  const handleActiveItemChange = (item) => {
    setActiveItem(item);
  }

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => handleActiveItemChange(null)}
        >Все</li>
        {items && items.map((item) => {
          return (
            <li
              key={item}
              onClick={() => handleActiveItemChange(item)}
              className={activeItem === item ? 'active' : ''}
            >{item}</li>
          )
        })}
      </ul>
    </div>

  )
}

export default Categories;
