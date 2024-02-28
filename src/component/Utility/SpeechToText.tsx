import React, {useEffect, useState} from 'react';
import Voice from '@react-native-voice/voice';
import {Icon, IconButton, Text} from 'react-native-paper';
import {View, Modal, StyleSheet, Dimensions} from 'react-native';
import {color} from '../../../App';

function SpeechToText({setVal}) {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;

    return () => Voice.destroy().then(Voice.removeAllListeners);
  }, []);

  const onSpeechStart = (e: any) => {
    console.log(e);
  };
  const onSpeechEnd = (e: any) => {
    console.log(e);
  };
  const onSpeechResults = (e: any) => {
    setVal(e.value.join());
    handleStop();
  };

  async function handleStart() {
    try {
      await Voice.start('en-US');
      setStatus(true);
    } catch (error) {
      console.log('error on start >>> ', error);
    }
  }
  async function handleStop() {
    try {
      await Voice.stop();
      await Voice.destroy();
      setStatus(false);
    } catch (error) {
      console.log('error on stop >>> ', error);
    }
  }

  const [visible, setVisible] = useState(false);

  return (
    <View>
      <IconButton icon={'microphone'} onPress={() => setVisible(!visible)} />
      <RecordScreen
        status={status}
        handleStart={handleStart}
        handleStop={handleStop}
        visible={visible}
        setVisible={setVisible}
      />
    </View>
  );
}

function RecordScreen({visible, setVisible, handleStart, handleStop, status}) {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      style={modalStyle.centeredView}
      transparent={true}
      onRequestClose={() => {
        handleStop();
        setVisible(!visible);
      }}>
      <View style={modalStyle.modalView}>
        <IconButton
          icon={'close'}
          size={20}
          iconColor={color.primary}
          onPress={() => {
            handleStop();
            setVisible(!visible);
          }}
        />
        <View style={modalStyle.wrapper}>
          {status ? (
            <IconButton
              size={50}
              onPress={handleStop}
              iconColor="red"
              icon={'stop'}
            />
          ) : (
            <IconButton onPress={handleStart} size={50} icon={'microphone'} />
          )}
        </View>
        {status ? (
          <Text variant="bodyLarge" style={modalStyle.text}>
            Recording
          </Text>
        ) : (
          <Text variant="bodyLarge" style={modalStyle.text}>
            Tap to start recording
          </Text>
        )}
      </View>
    </Modal>
  );
}

const modalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 50,
    marginTop: Dimensions.get('window').height / 3,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 2,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  wrapper: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    alignSelf: 'center',
    height: 70,
    borderRadius: 100 / 2,
  },
  text: {
    fontStyle:'italic',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default SpeechToText;
