import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Layout, Popover, Text } from '@ui-kitten/components';

export default function PopoverStyledBackdropShowcase (props) {

  const [visible, setVisible] = React.useState(props.open);

  const renderToggleButton = () => (
    <></>
  );

  return (
    <Popover
      backdropStyle={styles.backdrop}
      visible={visible}
      anchor={renderToggleButton}
      onBackdropPress={() => setVisible(false)}>
      <Layout style={styles.content}>
        
        <Text>
          {props.content}
        </Text>
      </Layout>
    </Popover>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  avatar: {
    marginHorizontal: 4,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});