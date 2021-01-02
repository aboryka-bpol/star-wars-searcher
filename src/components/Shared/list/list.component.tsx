import { IPlanet } from "../../../planets/interfaces/planet.interface";
import { ISpaceship } from "../../../spaceships/interfaces/spaceship.interface";

type Resource = ISpaceship | IPlanet;

interface IProps { 
  resources: Resource[],
  hasPrev: boolean,
  hasNext: boolean,
  page: number,
  onPageChange: (selectedPage: number) => void,
  onResourceSelect: (spaceship: ISpaceship) => void,
}

const List = ({ resources, hasPrev, hasNext, onPageChange, page, onResourceSelect }: IProps) => {
  const renderedList = resources.map((resource) => {
    const { name } = resource;
    return (
      <div key={name}>
        <span className="resource">{name}</span> 
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
