import React, { useEffect } from 'react';
import { IndexPath, Menu, MenuItem } from '@ui-kitten/components';

 const MenuSimpleUsageShowcase = ({setChosenTab}) => {

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
 
  return (
    <Menu
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <MenuItem  onPress={()=>setChosenTab('new')} title='ביקורת חדשה'/>
      <MenuItem onPress={()=>setChosenTab('old')} title='ביקורות ישנות'/>
     
    </Menu>
  );
};

export default MenuSimpleUsageShowcase