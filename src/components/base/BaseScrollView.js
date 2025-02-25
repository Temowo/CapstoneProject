import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Screen from '../Screen';

const isCloseToBottom = event => {
  const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

export default function BaseScrollView({children, ...rest}) {
  const [isBottom, setIsBottom] = useState(false);
  const handleScroll = event => {
    if (isCloseToBottom(event)) {
      if (!isBottom) {
        setIsBottom(true);
      }
    } else {
      setIsBottom(false);
    }
  };

  return (
    <Screen {...rest}>
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        automaticallyAdjustKeyboardInsets={true}
        keyboardShouldPersistTaps="handled">
        {children}
      </ScrollView>
    </Screen>
  );
}
