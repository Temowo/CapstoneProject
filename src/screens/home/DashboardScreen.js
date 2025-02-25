import {StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import BaseScrollView from '../../components/base/BaseScrollView';
import BaseView from '../../components/base/BaseView';
import theme from '../../resources/theme';
import HeaderView from './HeaderView';
import SearchIcon from '../../assets/svg/magnifying-glass.svg';
import GearIcon from '../../assets/svg/gear.svg';
import {FoodCategories} from './FoodCategories';
import {homeFeedList} from '../../resources/constants';
import {FlashList} from '@shopify/flash-list';
import ListItem from './ListItem';
import {useCallback} from 'react';

function DashboardScreen() {
  const getFlattenedList = () => {
    const flattenedData = [];
    homeFeedList.forEach(sectionData => {
      flattenedData.push({
        id: `section-id-${sectionData.listTitle}`,
        isSection: true,
        isSpacer: false,
        listTitle: sectionData.listTitle,
      });

      sectionData.data.forEach(data => {
        flattenedData.push({
          ...data,
          sectionId: sectionData.listTitle,
        });
      });

      flattenedData.push({
        id: `spacer-${sectionData.listTitle}`,
        isSpacer: true,
        isSection: false,
      });
    });
    return flattenedData;
  };

  const flattenedList = getFlattenedList();

  const getItemType = useCallback(item => {
    if (!item) return 'grid';
    return item.isSection || item.isSpacer ? 'full' : 'grid';
  }, []);

  return (
    <BaseScrollView>
      <HeaderView />

      <BaseView style={styles.searchContainer}>
        <BaseView style={styles.searchBar}>
          <SearchIcon
            height={theme.iconSizes.sl.height}
            width={theme.iconSizes.sl.width}
            style={{color: theme.colors.textColor}}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Your Food"
          />
          <TouchableOpacity style={styles.filterButton}>
            <GearIcon
              height={theme.iconSizes.l.height}
              width={theme.iconSizes.l.width}
              style={{color: theme.colors.textColor}}
            />
          </TouchableOpacity>
        </BaseView>
      </BaseView>

      <FoodCategories />

      <BaseView
        style={{
          paddingHorizontal: theme.spacing.sl,
          paddingVertical: theme.spacing.s,
        }}>
        <FlashList
          data={flattenedList}
          renderItem={({item}) => <ListItem item={item} />}
          estimatedItemSize={150}
          keyExtractor={item => item.id}
          numColumns={2}
          horizontal={false}
          ListFooterComponent={<BaseView style={{height: 55}} />}
          onEndReachedThreshold={0.5}
          getItemType={getItemType}
          overrideItemLayout={(layout, item, index, maxColumns) => {
            if (!item) return;
            if (item.isSection || item.isSpacer) {
              layout.span = maxColumns;
            } else {
              layout.span = 1;
            }
          }}
        />
      </BaseView>
    </BaseScrollView>
  );
}

export default DashboardScreen;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingHorizontal: theme.spacing.l,
  },

  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.sm,
    marginTop: theme.spacing.l,
  },
  searchBar: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: theme.colors.grayText,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.searchBackground,
    borderRadius: theme.borderRadii.s,
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.s,
    paddingVertical: theme.spacing.v,
  },
  searchInput: {
    flex: 1,
    paddingVertical: theme.spacing.s,
    marginLeft: theme.spacing.v,
    fontSize: 14,
  },
  filterButton: {
    flexDirection: 'row',
    width: theme.iconSizes.xxl.width,
    height: theme.iconSizes.xxl.height,
    borderRadius: theme.borderRadii.s,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
