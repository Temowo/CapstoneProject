import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import BaseView from '../../components/base/BaseView';
import TextView from '../../components/base/TextView';
import theme from '../../resources/theme';
import {screenWidth} from '../../resources/layoutHelper';
import ListHeader from './ListHeader';
import CartIcon from '../../assets/svg/cartIcon.svg';

export default function ListItem({item}) {
  if (item.isSection) {
    return (
      <BaseView style={{paddingHorizontal: theme.spacing.sm, flex: 1}}>
        <ListHeader listTitle={item.listTitle} />
      </BaseView>
    );
  }

  if (item.isSpacer) {
    return (
      <BaseView
        style={{
          height: theme.spacing.m,
          width: '100%',
          paddingHorizontal: theme.spacing.sm,
        }}
      />
    );
  }

  return (
    <BaseView style={{paddingHorizontal: theme.spacing.v}}>
      <TouchableOpacity style={styles.foodItem}>
        <Image source={item.image} style={styles.foodImage} />
        <TextView variant="heading2" style={styles.foodName}>
          {item.name}
        </TextView>
        <BaseView style={styles.priceRatingRow}>
          <TextView variant="bodyText3" style={{paddingRight: theme.spacing.v}}>
            {item.minutes}min •{' '}
          </TextView>
          <TextView variant="bodyText" color="brightPink">
            ★
          </TextView>
          <TextView variant="bodyText2" style={styles.reviews}>
            {' '}
            {item.rating}
          </TextView>
        </BaseView>
        <BaseView>
          <TextView
            variant="miniTitle2"
            style={{paddingVertical: theme.spacing.iv, textAlign: 'left'}}>
            ${item.price}
          </TextView>
        </BaseView>
        <TouchableOpacity style={styles.addButton}>
          <CartIcon
            width={theme.iconSizes.sm.width}
            height={theme.iconSizes.sm.height}
            style={{color: theme.colors.white}}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </BaseView>
  );
}

const styles = StyleSheet.create({
  foodItem: {
    flex: 1,
    margin: theme.spacing.v,
    backgroundColor: theme.colors.white,
    borderRadius: theme.spacing.s,
    padding: theme.spacing.s,
    position: 'relative',
    elevation: 2,
    shadowColor: theme.colors.charcoal,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: theme.spacing.iv,
  },
  foodImage: {
    width: screenWidth * 0.38,
    height: 140,
    borderRadius: theme.borderRadii.v,
    marginBottom: theme.spacing.v,
  },

  priceRatingRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: theme.spacing.iv,
  },

  addButton: {
    position: 'absolute',
    bottom: theme.spacing.v,
    right: theme.spacing.v,
    backgroundColor: theme.colors.brightPink,
    width: theme.iconSizes.xl.width,
    height: theme.iconSizes.xl.height,
    borderRadius: theme.spacing.s,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
