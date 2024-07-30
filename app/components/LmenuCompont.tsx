import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Modal, } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

const MenuButton = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
        >
          <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.menuItem} onPress={() => { toggleModal(); alert('Home'); }}>
              <Text style={styles.menuText}>About us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => { toggleModal(); alert('Profile'); }}>
              <Text style={styles.menuText}>Contact us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => { toggleModal(); alert('Settings'); }}>
              <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={toggleModal}>
              <Text style={styles.menuText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>  
        </Modal>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      padding: 10,
      backgroundColor: '#036B72',
      borderRadius: 25,
      elevation: 5,
    },

    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        width: 250,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
      },
      menuItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
        alignItems: 'center',
      },
      menuText: {
        fontSize: 18,
      },
  });
  
  export default MenuButton;
  