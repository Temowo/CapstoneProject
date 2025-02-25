import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../../resources/theme';
import BaseView from '../../components/base/BaseView';
import TextView from '../../components/base/TextView';

const imagePath = require('../../assets/images/userAvatar.png');
import FourDotsIcon from '../../assets/svg/four-dots.svg';

export default function HeaderView() {
  return (
    <BaseView>
    <BaseView style={styles.header}>
      <BaseView
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.profileButton}>
          <Image source={imagePath} style={styles.profilePic} />
        </TouchableOpacity>
        <TextView
          color="textColor"
          style={{textAlign: 'left', paddingHorizontal: theme.spacing.s}}
          variant="miniTitle2">
          Hi, Kitbase
        </TextView>
      </BaseView>

      <TouchableOpacity>
        <FourDotsIcon
          width={theme.iconSizes.xl.width}
          height={theme.iconSizes.xl.height}
          style={{color: theme.colors.grayText}}
        />
      </TouchableOpacity>
    </BaseView>

    <BaseView style={styles.containerStyle}>
        <TextView color="textColor" variant="heading1" textAlign="left">
          Find and Order
        </TextView>
        <TextView color="textColor" variant="heading1" textAlign="left">
          Food for You🦁
        </TextView>
      </BaseView>
    </BaseView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.s
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.s,
  },

  profileButton: {
    width: theme.iconSizes.xxl.width,
    backgroundColor: theme.colors.brightPink,
    height: theme.iconSizes.xxl.height,
    borderRadius: theme.borderRadii.sl,
    opacity: 0.9,
    overflow: 'hidden',
  },

  profilePic: {
    width: '100%',
    height: '100%',
  },
});
