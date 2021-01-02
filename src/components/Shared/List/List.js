import React from 'react';
const List = ({resources, hasPrev, hasNext, onPageChange, page, onResourceSelect }) => {
  const renderedList = resources.map((resource, index) => {
    return (
      <div key={index}>
        <span className="resource">{resource.name}</span> 
        <button onClick={() => onResourceSelect(resource)}>Details</button>
      </div>
   
    )
  });

  return (
    <div>
      {renderedList}
      <button value="prev" disabled={!hasPrev} onClick={() => onPageChange(page-1)}>previous page</button>
      <button value="next" disabled={!hasNext} onClick={() => onPageChange(page+1)}>next page</button>
    </div>
  );
}

export default List;
