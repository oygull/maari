import styles from "./dropdown.module.scss";
import { Link } from "react-router-dom";

interface Item {
  childId: number; 
  childName: string; 
  childPath:string;
}

interface DropdownProps {
  itemPath: string;
  itemChildren: Item[];
  setFilteredSubCategory: React.Dispatch<React.SetStateAction<Item[]>>;
}

const Dropdown: React.FC<DropdownProps> = ({ itemChildren, setFilteredSubCategory, itemPath }) => {
  
  const handleLinkClick = (item: Item) => {
    setFilteredSubCategory([item]); 
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
                          to={`/${itemPath}/${item.childPath}`} >
                        <span>{item.childName} </span>
                        </Link>
                      )
                    }
                  </div>
    </div>
  )
} 

export default Dropdown;