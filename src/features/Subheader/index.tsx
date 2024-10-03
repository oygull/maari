import styles from "./subheader.module.scss"
import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "../Dropdown";
import headerItemsArr from "../../app/assets/date/headwrItemsArr";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


interface categoryItem {
  childId: number;
  childName: string;
  childPath: string;
}
interface mainCategoryItem {
  id: number;
  itemNamme: string;
  itemChildren: categoryItem[];
  isDropdownVisible:boolean;
  path: string;
}

interface CategoryPageProps {
  setFilteredCategory: React.Dispatch<React.SetStateAction<categoryItem[]>>;  
  setFilteredMainCategory: React.Dispatch<React.SetStateAction<mainCategoryItem[]>>; 
}

const Subheader : React.FC<CategoryPageProps> = ({ setFilteredCategory,setFilteredMainCategory }) => {

  const [visibleDropdown, setVisibleDropdown] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setVisibleDropdown(id);
  };

  const handleMouseLeave = () => {
    setVisibleDropdown(null);
  };

  const handleLinkClick = (item: mainCategoryItem) => {
    setFilteredMainCategory([item]); 
  };

  return (
    <div className={styles.wrapper}>
     <div className="container">
        <ul  onMouseLeave={handleMouseLeave}  className={styles.subheaderList}>       
            {
              headerItemsArr.map((item)=>
                <li  onClick={() => handleLinkClick(item)}    onMouseEnter={() => handleMouseEnter(item.id)}
                 className={styles.subheaderItem}>
                  {(() => {
                    if (item.itemChildren.length===0){
                     return(
                      <div className={styles.linkBox} >
                      <Link className={styles.subLinks} to={item.path}>{item.itemNamme}</Link>
                  </div>
                     )
                    } else {
                      return(
                        <div className={styles.linkBox} >
                        <Link className={styles.subLinks} to={item.path}>{item.itemNamme}</Link>
                        { visibleDropdown === item.id ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small"/> }
                    </div>
                       )
                    }
                  })()}

                {visibleDropdown === item.id && <Dropdown setFilteredCategory={setFilteredCategory}  itemChildren={item.itemChildren}/>}
                
                </li>
              )
            }
        </ul>
     </div>
    </div>
  )
} 

export default Subheader;