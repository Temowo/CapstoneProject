import {
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { screenHeight, screenWidth } from '../resources/layoutHelper';
import Screen from '../components/Screen';
import BaseView from '../components/base/BaseView';
import theme from '../resources/theme';
import TextView from '../components/base/TextView';
const imagePath = require('../assets/images/landing-screen.jpg');
const imageHeight = screenHeight * 0.25;
const imageWidth = screenWidth * 0.75;

const LandingScreen = ({navigation}) => {
  return (
    <Screen backgroundColor="mainBackground">
      <BaseView style={styles.landingImageContainer}>
        <BaseView style={styles.landingCircle}>
          <Image
            source={imagePath}
            style={[
              styles.landingImage,
              {width: imageWidth, height: imageHeight},
            ]}
            resizeMode="contain"
          />
        </BaseView>
      </BaseView>

      <BaseView style={styles.landingContent}>
        <TextView variant="largeTitle">EatXpress</TextView>
        <TextView variant="bodyText">
          Delicious food delivered to your doorstep
        </TextView>
      </BaseView>

      <BaseView style={styles.buttonContainer}>
        <TouchableOpacity
          style={theme.buttonStyles.primaryButton}
          onPress={() => navigation.navigate('Login')}>
          <TextView variant="buttonActive" color="white">Get Started</TextView>
        </TouchableOpacity>
      </BaseView>
    </Screen>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  landingImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  landingCircle: {
    width: 350,
    height: 350,
    borderRadius: 175,
    backgroundColor: theme.colors.brightPink,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: theme.spacing.m
  },
  landingImage: {
    alignSelf: 'center',
  },
  landingContent: {
    flex: 1,
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.xxx,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  buttonContainer: {
    paddingHorizontal: theme.spacing.l,
    paddingBottom: 20,
  },
});
