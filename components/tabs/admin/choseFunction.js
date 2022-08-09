import React from 'react';
import { Icon, Menu, MenuGroup, MenuItem } from '@ui-kitten/components';

console.log('refresh ')
console.log(Menu)

const SmartphoneIcon = (props) => (
  <Icon {...props} name='download'/>
);

const BrowserIcon = (props) => (
  <Icon {...props} name='browser-outline'/>
);

const ColorPaletteIcon = (props) => (
  <Icon {...props} name='color-palette-outline'/>
);

const StarIcon = (props) => (
  <Icon {...props} name='star'/>
);

 const MenuGroupsShowcase = ({setChosen}) => {

  const [selectedIndex, setSelectedIndex] = React.useState(null);

  return (
    <React.Fragment>
 
       <Menu
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
        >
          
        <MenuGroup onPress={()=>setChosen('Download new quiz from Google sheets')} title='Download new quiz from Google sheets' accessoryLeft={SmartphoneIcon}>  
        <MenuItem title='Nebular' accessoryLeft={StarIcon}/>
            </MenuGroup>

        <MenuGroup  onPress={()=>setChosen('Downdddddddload new quiz from Google sheets')} title='Akveo Angular' accessoryLeft={BrowserIcon}>
          <MenuItem title='Nebular' accessoryLeft={StarIcon}/>
          <MenuItem title='ngx-admin' accessoryLeft={StarIcon}/>
          <MenuItem title='UI Bakery' accessoryLeft={StarIcon}/>
        </MenuGroup>

        <MenuGroup title='Akveo Design' accessoryLeft={ColorPaletteIcon}>
          <MenuItem title='Eva Design System' accessoryLeft={StarIcon}/>
          <MenuItem title='Eva Icons' accessoryLeft={StarIcon}/>
        </MenuGroup>
      </Menu>

    </React.Fragment>
  );
};

export default MenuGroupsShowcase