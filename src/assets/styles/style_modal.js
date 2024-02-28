import {StyleSheet} from 'react-native';

const styleModal = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  searchContainer: {
    flex: 1,
    gap: 10,
    backgroundColor: '#ededed',
  },
  searchBox: {
    paddingVertical: 2,
    marginTop: 8,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'white',
  },
  recentSearch: {
    paddingVertical: 2,
    gap:10,
  },
  recentItem: {
    gap : 10,
    backgroundColor:'white',
    alignItems: 'center',
    padding: 8,
    flexDirection: 'row',
  },
});

export default styleModal;
