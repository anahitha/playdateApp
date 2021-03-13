import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {ListItem} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/header';

export default class EventScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            inviteList: [],
            userId: firebase.auth().currentUser.email
        }
        this.requestref = null;
    }
    
}