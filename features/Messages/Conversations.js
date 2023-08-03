import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Messages from './Messages.js';
import { GlobalView } from '../../globalComponents/globalStyles.js';
import moment from 'moment';
import axios from 'axios';

// const customLanguage = {
//   s: 's', // seconds
//   m: 'min', // minutes
//   h: 'hr', // hours
//   d: 'd', // days
//   w: 'w', // weeks
//   M: 'mo', // months
//   y: 'y' // years
// };

// moment.updateLocale('en', { relativeTime: customLanguage });

const Conversations = ({ currentUser, profile, setProfile, navigation, handleProfileUpdate }) => {

  let [conversationsArray, setConversationsArray] = useState([]);
  const [activeConversation, setActiveConversation] = useState({});
  const [conversationSelected, setConversationSelected] = useState(false);
  const [inputValue, setInputValue] = useState('');

  conversationsArray = [{ username: 'Patrick', content: 'Hello how are you? I would like to buy a comic.', created_at: '2023-08-02T21:38:29Z'}, { username: 'Patrick', content: 'Hello how are you? I would like to buy a comic.', created_at: '2023-08-02T20:38:29Z'}, { username: 'Patrick', content: 'Hello how are you? I would like to buy a comic.', created_at: '2023-08-02T19:38:29Z'}, { username: 'Patrick', content: 'Hello how are you? I would like to buy a comic.', created_at: '2023-08-02T18:38:29Z'}];

  const renderConversation = ({item}) => {

    const dateTimeAgo = moment(item.created_at).fromNow();
    // const dateTimeAgo = moment('2023-08-03T20:40:54+0000').fromNow();

    return (
      <TouchableOpacity onPress={() => {
        setActiveConversation(item);
        setConversationSelected(true);
      }}>
        <View style={listStyles.container}>
          <View style={listStyles.icon}>
            <Text style={listStyles.iconText}>
              P
            </Text>
          </View>
          <View style={listStyles.textContainer}>
            <View style={listStyles.messageContainer}>
              <Text numberOfLines={1} style={listStyles.messageText}>
                Hello how are you? I would like to buy a comic.
              </Text>
            </View>
            <View style={listStyles.timeContainer}>
              <Text style={listStyles.timeText}>
                {dateTimeAgo}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (!conversationSelected) {
    return (
      <SafeAreaView style={bodyStyles.safeView} >
          <View style={headerStyles.headerContainer}>
            <TouchableOpacity style={headerStyles.textContainer} onPress={() => navigation.navigate('User Profile', {
                  currentUser: profile,
                  navigation: navigation,
                  profile: profile,
                  setProfile: setProfile,
                  handleProfileUpdate: handleProfileUpdate
                })}>
              <Text style={headerStyles.headerText}>
                Back
              </Text>
            </TouchableOpacity>
            <View style={headerStyles.titleContainer}>
              <Text style={headerStyles.titleText}>
                Messages
              </Text>
            </View>
            <TouchableOpacity style={headerStyles.textContainer} onPress={() => navigation.navigate('Cart')}>
              <Text style={headerStyles.headerText}>
                Cart
              </Text>
            </TouchableOpacity>
          </View>
          <View style={bodyStyles.bodyContainer}>
            <FlatList
                data={conversationsArray}
                renderItem={renderConversation}
                keyExtractor={(item, index) => index}
                showsVerticalScrollIndicator={false}
              />
          </View>
      </SafeAreaView>
    );
  } else {
    return (
      <Messages currentUser={currentUser} activeConversation={activeConversation} setActiveConversation={setActiveConversation} setConversationSelected={setConversationSelected} navigation={navigation} />
    );
  }
};




const headerStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#ccc',
    borderBottomWidth: 1
  },
  textContainer: {
    height: 50,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 16
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  titleText: {
    fontSize: 24,
    flexWrap: 'wrap'
  }
});

const bodyStyles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#FDFAF4'
  },
  bodyContainer: {
    flex: 1
  }
});

const listStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    height: 70,

  },
  icon: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4B363'
  },
  iconText: {
    fontSize: 48
  },
  textContainer: {
    width: 300,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    marginRight: 10
  },
  messageContainer: {
    height: '100%',
    width: 240,
    justifyContent: 'center'
  },
  messageText: {
    fontSize: 16
  },
  timeContainer: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 10,
    color: 'grey',
    textAlign: 'center',
  }
});



export default Conversations;



