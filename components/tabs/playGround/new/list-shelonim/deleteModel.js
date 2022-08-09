import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';
import { FontAwesome } from '@expo/vector-icons'; 

 const ModalWithBackdropShowcase = (props) => {

//   const [visible, setVisible] = React.useState(props.openModel);

  return (
    <View style={styles.container}>

    

      <Modal
        visible={props.openModel}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => props.setOpenModel(false)}>

            
        <Card disabled={true}>

        {props.ui?props.ui:<Text>Welcome to UI Kitten 😻</Text>}
          
          {/* <Button onPress={() => props.setOpenModel(false)}>
            DISMISS
          </Button> */}

          <FontAwesome onPress={() => props.setOpenModel(false)} name="close"
          style={{marginBottom:20,marginTop:20,marginLeft:'auto',marginRight:'auto'}}
          size={24} color="black" />

        </Card>
      </Modal>

    </View>
  );
};

export default ModalWithBackdropShowcase
const styles = StyleSheet.create({
  container: {
    // minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});