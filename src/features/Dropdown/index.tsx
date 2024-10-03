import styles from "./dropdown.module.scss";
import { Link } from "react-router-dom";

interface Item {
  childId: number; 
  childName: string; 
  childPath:string;
}

interface DropdownProps {
  itemChildren: Item[];
  setFilteredCategory: React.Dispatch<React.SetStateAction<Item[]>>;
}

const Dropdown: React.FC<DropdownProps> = ({ itemChildren, setFilteredCategory }) => {
  
  const handleLinkClick = (item: Item) => {
    setFilteredCategory([item]); 
  };
  
  return (
    <div className={styles.hoverBox}>
                  <div className={styles.box}>
                    {
                      itemChildren.map((item)=>
                       <Link 
                          onClick={() => handleLinkClick(item)}  
                          data-replace={item.childName} 
                          className={styles.hoverLinks} 
                          to={`/eachitem/${item.childPath}`} >
                        <span>{item.childName} </span>
                        </Link>
                      )
                    }
                  </div>
    </div>
  )
} 

export default Dropdown;