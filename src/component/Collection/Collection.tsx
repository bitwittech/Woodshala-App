import {View, Text} from 'react-native';
import React from 'react';
import styleCollection from '../../assets/styles/style_collection';
import styleHome from '../../assets/styles/style_home';
import {Button, Icon, IconButton, List} from 'react-native-paper';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {EllipsizeProp} from 'react-native-paper/lib/typescript/types';
import {useDispatch} from 'react-redux';
import {setCatagories} from '../../redux/feature/generalSlice';
import {useNavigation} from '@react-navigation/native';

const Collection = () => {
  return (
    <View style={styleCollection.container}>
      {/* search Bar  */}
      <TouchableOpacity style={styleHome.searchBar}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconButton icon={'magnify'} />
          <View>
            <Text style={styleHome.searchText}>What are you looking for?</Text>
          </View>
        </View>
        <IconButton icon={'microphone'} />
      </TouchableOpacity>
      {/* List Started */}
      <ScrollView style={{padding: 2, marginBottom: 100}}>
        <ListComp ListObj={ListObj} />
      </ScrollView>
    </View>
  );
};

function ListComp({ListObj}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function handleProduct(name) {
    dispatch(setCatagories({catagories: name}));
    navigation.navigate('Product');
  }
  return (
    <List.Section>
      {ListObj.map(
        (
          row:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | ((props: {
                selectable: boolean;
                ellipsizeMode: EllipsizeProp | undefined;
                color: string;
                fontSize: number;
              }) => React.ReactNode)
            | null
            | undefined,
          key,
        ) => {
          if (typeof row !== 'object') {
            return (
              <List.Item
                onPress={() => handleProduct(row)}
                key={key}
                title={row}
              />
            );
          } else {
            let listName = Object.keys(row)[0];
            let subListItems = row[listName];
            return (
              <List.Accordion
                key={key}
                right={props =>
                  props.isExpanded ? (
                    <Icon source={'minus'} size={16} />
                  ) : (
                    <Icon source={'plus'} size={16} />
                  )
                }
                style={{backgroundColor: 'white'}}
                title={listName}>
                {subListItems.map(
                  (
                    item:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | ((props: {
                          selectable: boolean;
                          ellipsizeMode: EllipsizeProp | undefined;
                          color: string;
                          fontSize: number;
                        }) => React.ReactNode)
                      | null
                      | undefined,
                    key: number,
                  ) => (
                    <List.Item
                      onPress={() => handleProduct(item)}
                      key={key}
                      style={{paddingLeft: 10}}
                      title={item}
                    />
                  ),
                )}
              </List.Accordion>
            );
          }
        },
      )}
    </List.Section>
  );
}

// name are also working as page filter in catagories
let ListObj = [
  'All Collection',
  {
    Furniture: [
      'Bed',
      'Bench',
      'Chair',
      'Cabinet',
      'Cradle',
      'Decor',
      'Dinning Set',
      'Door',
      'Drawer CHest',
      'Dressing Table',
      'Mirror',
      'Sofa',
      'Swing',
      'Table',
      'Temple',
    ],
  },
  {
    'Bedroom Set': [
      'Bed',
      'Bedside',
      'Dressing table',
      'Showcase',
      'Mirror',
      'Wall Partition',
      'Racking Chair',
      'Clock',
      'Organizer',
      'Wall Decor',
      'T.V Unit',
      'Hook & Key Holder',
      'Drawer Chest',
      'Bedroom set-14',
    ],
  },
];

export default Collection;
