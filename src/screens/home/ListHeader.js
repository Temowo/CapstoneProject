import {StyleSheet, TouchableOpacity} from 'react-native';
import BaseView from '../../components/base/BaseView';
import TextView from '../../components/base/TextView';
import theme from '../../resources/theme';
import FourDotsIcon from '../../assets/svg/four-dots.svg';

export default function ListHeader({listTitle}) {
  return (
    <BaseView style={styles.containerStyle}>
      <TextView color="textColor" style={styles.listTitle} variant="heading2">
        {listTitle}
      </TextView>
      <TouchableOpacity>
        <FourDotsIcon
          width={theme.iconSizes.xl.width}
          height={theme.iconSizes.xl.height}
          style={{color: theme.colors.grayText}}
        />
      </TouchableOpacity>
    </BaseView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'center',
  },
  listTitle: {
    textAlign: 'left',
    paddingVertical: theme.spacing.s,
  },
});
