import { Picker } from '@react-native-picker/picker';
import Router from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { colors, darkColors, P } from '~/common/styleguide';
import CustomAppearanceContext from '~/context/CustomAppearanceContext';
import { Query, QueryOrder, QueryOrderDirection } from '~/types';
import urlWithQuery from '~/util/urlWithQuery';

import { Sort as SortIcon } from './Icons';
import Tooltip from './Tooltip';

type SortButtonProps = {
  query: Query;
};

const sorts = [
  {
    param: 'relevance',
    label: 'Relevance',
  },
  {
    param: 'updated',
    label: 'Last Updated',
  },
  {
    param: 'added',
    label: 'Recently Added',
  },
  {
    param: 'quality',
    label: 'Quality',
  },
  {
    param: 'popularity',
    label: 'Popularity Gain',
  },
  {
    param: 'downloads',
    label: 'Downloads',
  },
  {
    param: 'stars',
    label: 'Stars',
  },
  {
    param: 'issues',
    label: 'Issues',
  },
];

export const SortButton = ({ query: { order, direction, offset }, query }: SortButtonProps) => {
  const [sortValue, setSortValue] = useState<QueryOrder | undefined>(order);
  const [sortDirection, setSortDirection] = useState<QueryOrderDirection | undefined>(direction);
  const [paginationOffset, setPaginationOffset] = useState<number | undefined>(
    typeof offset === 'string' ? parseInt(offset, 10) : offset
  );
  const [isSortIconHovered, setIsSortIconHovered] = useState(false);
  const { isDark } = useContext(CustomAppearanceContext);

  useEffect(() => {
    const url = urlWithQuery('/', {
      ...query,
      order: sortValue,
      direction: sortDirection,
      offset: paginationOffset,
    });
    if (url !== Router.pathname) {
      void Router.push(url);
    }
  }, [sortValue, sortDirection]);

  return (
    <View
      style={[
        styles.container,
        styles.displayHorizontal,
        { backgroundColor: isDark ? darkColors.border : colors.gray5 },
      ]}>
      <View style={styles.displayHorizontal}>
        <Tooltip
          sideOffset={8}
          trigger={
            <Pressable
              onHoverIn={() => setIsSortIconHovered(true)}
              onHoverOut={() => setIsSortIconHovered(false)}
              style={sortDirection === 'ascending' && styles.flippedIcon}
              aria-label="Toggle sort direction"
              onPress={() => {
                setSortDirection(previousOrder =>
                  previousOrder === 'ascending' ? 'descending' : 'ascending'
                );
                if (!sortValue) {
                  setSortValue('relevance');
                }
              }}>
              <SortIcon fill={isSortIconHovered ? colors.primary : colors.white} />
            </Pressable>
          }>
          Toggle sort order
        </Tooltip>
        <P style={styles.title}>Sort: </P>
      </View>
      <View style={styles.pickerContainer}>
        <P style={styles.title}>
          <Picker
            selectedValue={sortValue}
            style={[
              styles.picker,
              {
                fontWeight: 600,
                backgroundColor: isDark ? darkColors.border : 'transparent',
              },
            ]}
            onValueChange={value => {
              setPaginationOffset(null);
              setSortValue(value);
            }}>
            {sorts.map(sort => (
              <Picker.Item
                key={sort.param}
                value={sort.param}
                label={sort.label}
                color={isDark ? colors.white : colors.black}
              />
            ))}
          </Picker>
          <P style={styles.arrow}>›</P>
        </P>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray5,
    height: 24,
    marginLeft: 8,
    paddingLeft: 8,
    borderRadius: 4,
  },
  displayHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 400,
    marginLeft: 6,
    fontSize: 14,
    userSelect: 'none',
  },
  arrow: {
    color: colors.secondary,
    fontSize: 18,
    lineHeight: 18,
    userSelect: 'none',
    position: 'absolute',
    pointerEvents: 'none',
    right: 6,
    top: 0,
    transform: 'rotate(90deg)',
  },
  pickerContainer: {
    top: 1,
    left: -4,
  },
  picker: {
    color: colors.white,
    borderWidth: 0,
    borderRadius: 2,
    position: 'relative',
    top: -1,
    fontSize: 14,
    paddingRight: 22,
    fontFamily: 'inherit',
    cursor: 'pointer',
  },
  flippedIcon: {
    transform: 'scaleY(-1)',
  },
});
