import React from "react";

 import {
    StyleProp,
    ViewStyle,
    Animated,
     Platform,
    ScrollView
    ,Text ,StyleSheet,
    SafeAreaView,
    I18nManager,
  } from 'react-native';
  import { AnimatedFAB } from 'react-native-paper';
  
  const MyComponent = ({
    animatedValue,
    visible,
    extended,
    label,
    animateFrom,
    style,
    iconMode,action
  }) => {
    const [isExtended, setIsExtended] = React.useState(true);
  
    const isIOS = Platform.OS === 'ios';
  
    const onScroll = ({ nativeEvent }) => {
      const currentScrollPosition =
        Math.floor(nativeEvent?.contentOffset?.y) ?? 0;
  
      setIsExtended(currentScrollPosition <= 0);
    };
  
    const fabStyle = { [animateFrom]: 16 };
  
    return (
      <SafeAreaView style={styles.container}>
        {/* <ScrollView onScroll={onScroll}>
          {[...new Array(100).keys()].map((_, i) => (
            <Text>{i}</Text>
          ))}
        </ScrollView> */}
        <AnimatedFAB
          icon={'microsoft-excel'}
          label={'יצירת קובץ'}
          extended={isExtended}
          onPress={() => action()}
          visible={visible}
          animateFrom={'right'}
          iconMode={'static'}
          style={[styles.fabStyle, style, fabStyle]}
        />
      </SafeAreaView>
    );
  };
  
   
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
    },
    fabStyle: {
      bottom: 16,
      right: 16,
      position: 'absolute',
    },
  });

  export default MyComponent