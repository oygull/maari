import styles from "./subheader.module.scss"
import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "../Dropdown";
import headerItemsArr from "../../app/assets/date/headwrItemsArr";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


interface subCategoryItem {
  childId: number;
  childName: string;
  childPath: string;
}
interface CategoryItem {
  id: number;
  itemNamme: string;
  itemChildren: subCategoryItem[];
  isDropdownVisible:boolean;
  path: string;
}

interface CategoryPageProps {
  setFilteredCategory: React.Dispatch<React.SetStateAction<CategoryItem[]>>;  
  setFilteredSubCategory: React.Dispatch<React.SetStateAction<subCategoryItem[]>>; 
}

const Subheader : React.FC<CategoryPageProps> = ({ setFilteredCategory,setFilteredSubCategory }) => {

  const [visibleDropdown, setVisibleDropdown] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setVisibleDropdown(id);
  };

  const handleMouseLeave = () => {
    setVisibleDropdown(null);
  };

  const handleLinkClick = (item: CategoryItem) => {
    setFilteredCategory([item]); 
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

                {visibleDropdown === item.id && <Dropdown itemPath={item.path} setFilteredSubCategory={setFilteredSubCategory}  itemChildren={item.itemChildren}/>}
                
                </li>
              )
            }
        </ul>
     </div>
    </div>
  )
} 

export default Subheader;