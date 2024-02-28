import React, {useState} from 'react';
import {Alert, Modal, Pressable, View} from 'react-native';
import styleModal from '../../assets/styles/style_modal';
import {useDispatch, useSelector} from 'react-redux';
import {setModal} from '../../redux/feature/generalSlice';
import {Text, Icon, IconButton, TextInput} from 'react-native-paper';
import SpeechToText from './SpeechToText';

const CusModal = () => {
  const {modal} = useSelector(state => state.generalSlice);
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(setModal({open: !modal.open}));
  }
  return (
    <Modal
      animationType="slide"
      visible={modal.open}
      onRequestClose={() => {
        dispatch(setModal({open: false}));
      }}>
      <View style={styleModal.centeredView}>
        {modal.type === 'search' && <Search handleClose={handleClose} />}
        {modal.type === 'blog' && <Blog />}
        {modal.type === '' && <Default />}
      </View>
    </Modal>
  );
};

function Search({handleClose}) {
  const [value, setVal] = useState('');
  return (
    <View style={styleModal.searchContainer}>
      <View style={styleModal.searchBox}>
        <IconButton onPress={handleClose} icon={'arrow-left'} />
        <TextInput
          activeUnderlineColor={'white'}
          underlineColor={'white'}
          value={value}
          onChangeText={e => setVal(e)}
          style={styleModal.searchInput}
          mode="flat"
          placeholder="What are you looking for?"
        />
        <SpeechToText setVal={setVal} />
      </View>
      {/* // recent search  */}
      <View style={styleModal.recentSearch}>
        <Text style={{paddingHorizontal: 10}} variant="bodyMedium">
          Recent Search
        </Text>
        <View style={styleModal.recentItem}>
          <Icon size={25} source={'history'} />
          <Text numberOfLines={1} variant="titleMedium">
            Chair
          </Text>
        </View>
      </View>
      {/* search result  */}
      <View />
    </View>
  );
}
function Blog() {
  return <Text>Blog</Text>;
}
function Default() {
  return <Text>Blog</Text>;
}
export default CusModal;
