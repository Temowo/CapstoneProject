import {ScrollView, StyleSheet} from 'react-native';
import {categories} from '../../resources/constants';
import {useState} from 'react';
import theme from '../../resources/theme';
import TextView from '../../components/base/TextView';
import {TouchableOpacity} from 'react-native';

export function FoodCategories() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.categoriesContainer}>
      {categories.map(category => {
        const IconComponent = category.icon;

        return (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              {
                borderColor:
                  selectedCategory === category.id
                    ? theme.colors.brightPink
                    : theme.colors.grayText,
              },
              selectedCategory === category.id && styles.selectedCategoryButton,
            ]}
            onPress={() => setSelectedCategory(category.id)}>
            <IconComponent
              height={theme.iconSizes.sl.height}
              width={theme.iconSizes.sl.width}
              style={{color: theme.colors.textColor}}
            />

            <TextView
              variant="bodyText3"
              style={[
                {
                  color:
                    selectedCategory === category.id
                      ? theme.colors.white
                      : theme.colors.charcoal,
                  marginLeft: 6,
                },
              ]}>
              {category.name}
            </TextView>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingHorizontal: theme.spacing.sm,
    marginTop: theme.spacing.l,
  },
  categoryButton: {
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.searchBackground,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.m,
    borderRadius: theme.borderRadii.sl,
    marginRight: theme.spacing.s,
  },
  selectedCategoryButton: {
    backgroundColor: theme.colors.brightPink,
  },
});
