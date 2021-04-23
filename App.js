import React, { useState } from "react";
import Loader from "./src/component/loader"
import { StoreProvider } from './src/context/store'
import { StatusBar } from "react-native";
import NavContainer from './src/screens/navigation/NavContainer';



export default () => {
  return (
    <StoreProvider>
      <StatusBar  hidden />
      <NavContainer />
      <Loader />
    </StoreProvider>
  );
};



// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import Loader from "./src/component/loader"
// import { StoreProvider } from './src/context/store'
// import { StatusBar } from "react-native";
// import NavContainer from './src/screens/navigation/NavContainer';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <View style={{flex:1}}>
//       <StoreProvider>
//       <StatusBar  hidden />
//       <NavContainer />
//       <Loader />
//     </StoreProvider>
//       </View>
//     );
//   }
// }

// console.disableYellowBox = true;







// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
// import { database } from './src/Setup';
// import moment from 'moment';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dates :[],
//       selectedDate: [],
//       dataSource:[],
//       markingdates:[],
//       sampledata:[]

//     };
//   }

//   componentDidMount() {
//     const mydata = database().ref('meetups/');
//     mydata.on('value', datasnap => {
//       if (datasnap.val()) {
//         this.setState({dataSource: Object.values(datasnap.val())});

//       }

//     });

//   }

//   selectDate(day){
//      if(day){
//       let mydate = moment(day).format('YYYY-MM-DD');
//       this.setState({selectedDate:mydate})
//       console.log(mydate)
//      }

//     else {
//           null

//        // console.log(mydate);
//     }
//   }

//   render() {
//      const arrayOfDates=  this.state.dataSource.map(item=>item.choseStartDate)
//     var customMarkedDates = {};
//     arrayOfDates.map((day)=>{
//       customMarkedDates[day] ={ selected: true, marked: true, selectedColor: 'green'}
//   })
//   console.log('bcjhdkbcld',customMarkedDates)

//     return (
//       <View style={{flex:1,backgroundColor:'white',marginTop:20}}>
//         <Calendar
//           onDayPress={(day) =>this.selectDate(day)}
//           markedDates={customMarkedDates}

//         markingType={'custom'}
//          selectedColor={'red'}
//          color={'red'}

//    />

//     <Text>hey=={this.state.selectedDate}</Text>

//       </View>
//     );
//   }
// }

// import React, {Component} from 'react';
// import {
//   PermissionsAndroid,
//   Text,
//   Alert,
//   StyleSheet,
//   View,
//   Button,
//   FlatList,
//   Linking,
//   Image,
// } from 'react-native';
// import Contacts from 'react-native-contacts';
// import Modal from 'react-native-modal';
// import Snackbar from 'react-native-snackbar';

// export default class App extends Component {
//   state = {
//     modalVisible: false,
//     contacts: null,
//   };

//   toggleModal = async () => {
//     this.setState({modalVisible: true});
//   };
//   async componentDidMount() {
//     this.toggleModal();
//   }

//   async componentWillUnmount() {
//     //this.toggleModal
//     this.setState({modalVisible: !this.state.modalVisible});
//   }

//   // permissionHandler= async()=> {

//   //   //       if(Platform.OS === 'ios'){

//   //   //       try
//   //   //       {
//   //   //       if (err) throw err;
//   //   //     } catch (e) {
//   //   //       if(e==="denied")
//   //   //       {
//   //   //         //this.setState({isProgress:false});
//   //   //        // alert('please allow contacts permission from Device Setting')
//   //   //       }
//   //   //       return;
//   //   //      }

//   //   //       this.loadContacts()
//   //   //     // })
//   //   //   }

//   //   //   else if(Platform.OS === 'android'){

//   //   //    try {
//   //   //   const granted = await PermissionsAndroid.request(
//   //   //     PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//   //   //     {
//   //   //       'title': 'You have to enable the Permissions',
//   //   //       'message': `for accessing his contacts`,

//   //   //     }

//   //   //   )
//   //   //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {

//   //   //     Snackbar.show({
//   //   //       text: 'Location Permission Granted',
//   //   //       duration: Snackbar.LENGTH_SHORT,
//   //   //     });
//   //   //     this.loadContacts()
//   //   //     this.setState({modalVisible:false})
//   //   //   }
//   //   //   else {
//   //   //     Linking.openSettings()
//   //   //     Snackbar.show({
//   //   //       text: 'Permission denied',
//   //   //       duration: Snackbar.LENGTH_SHORT,
//   //   //     });
//   //   //   }
//   //   // } catch (err) {
//   //   //   console.warn(err)
//   //   // }

//   //   //   }

//   // }

//   // loadContacts = () => {
//   //   Contacts.getAll((err, contacts) => {
//   //     contacts.sort(
//   //       (a, b) =>
//   //         a.givenName.toLowerCase() > b.givenName.toLowerCase(),
//   //     );
//   //     console.log('contacts -> ', contacts);
//   //     if (err === 'denied') {
//   //       alert('Permission to access contacts was denied');
//   //       console.warn('Permission to access contacts was denied');
//   //     } else {
//   //       //setContacts(contacts);
//   //       this.setState({contacts})
//   //       console.log('contacts', contacts);
//   //     }
//   //   });
//   // };

//   permissionHandler = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//           {
//             title: 'You have to enable the Permissions',
//             message: `for accessing his contacts`,
//           },
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           this.getList();
//           this.setState({modalVisible: false});
//         } else {
//           Linking.openSettings();
//         }
//       } catch (err) {
//         console.warn(err);
//       }

//     } else if (Platform.OS === 'ios') {
//         try
//     {
//     if (err) throw err;
//   } catch (e) {
//     if(e==="denied")
//     {
//       console.log('cannot access');
//        Linking.openSettings();
//     }
//     return;
//    }

//     this.getList();
//     }
//   };

//   getList = () => {
//    Contacts.getAll((err, contacts) => {
//       if (err === 'denied') {
//         console.log('cannot access');
//         Linking.openSettings();
//       } else {
//         this.setState({contacts});
//         console.log(contacts);
//       }

//      });

//   };

//   render() {
//     const {modalVisible} = this.state;
//     return (
//       <View style={styles.container}>
//         <Text>React Native Runtime Permission Request</Text>

//         {/* <Button title="Show modal" onPress={()=>this.permissionHandler()} /> */}
//         <FlatList
//           style={{flex: 1}}
//           data={this.state.contacts}
//           renderItem={({item}) => (
//             <View style={{flex: 1}}>
//               <Text style={styles.contact_details}>
//                 Name: {`${item.givenName} `} Surname: {item.familyName}
//               </Text>
//               {item.phoneNumbers.map(phone => (
//                 <Text style={styles.phones}>
//                   {phone.label} : {phone.number}
//                 </Text>
//               ))}
//             </View>
//           )}
//           //Setting the number of column
//           numColumns={1}
//           keyExtractor={(item, index) => index}
//         />
//         <Modal isVisible={modalVisible}>
//           <View
//             style={{
//               width: 400,
//               height: 300,
//               justifyContent: 'center',
//               alignItems: 'center',
//               backgroundColor: 'white',
//             }}>
//             <Image
//               source={require('./src/assets/images/permissionUser.png')}
//               style={{width: 100, height: 100}}
//             />
//             <Text
//               style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
//               Please Enable your Permisssion
//             </Text>
//             <Button title="Turn on" onPress={() => this.permissionHandler()} />
//           </View>
//         </Modal>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     marginTop: 30,
//   },
// });







// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   Alert,
// } from 'react-native';
// import {Calendar} from 'react-native-calendars';
// import moment from 'moment';
// import {database} from './src/Setup';

// const _format = 'YYYY-MM-DD';
// const _today = moment(new Date().dateString).format(_format);

// export default class App extends Component {
//   initialState = {
//     [_today]: {disabled: false},
//   };

//   state = {
//     _markedDates: this.initialState,
//     modalVisible: false,
//     selectedDay: [],
//     mydates: [],
//     SampleArray: [],
//     dataSource:[]
//   };

  

//   onDaySelect = day => {
//     const _selectedDay = moment(day.dateString).format(_format);
//     this.setState({
//       selectedDay: _selectedDay,
//       modalVisible: true,
//     });
//   };

//   AddItemsToArray = () => {
//     this.state.SampleArray.push(this.state.selectedDay);
//     database()
//       .ref('blockdates/')
//       .push({
//         selectedDay: this.state.selectedDay,
//       });

//     console.log('Kapil', this.state.SampleArray);
//   };



//   saveDay = () => {
//     const dots = [];
//     let selected = true;
//     const {_markedDates, selectedDay, mydates} = this.state;

//     if (_markedDates[selectedDay]) {
//       selected = !_markedDates[selectedDay].selected;
//     }

//     const clone = {..._markedDates};

//     clone[selectedDay] = {dots, selected, selectedColor: 'green'};

//     this.setState({
//       modalVisible: false,
//       _markedDates: clone,
//     });
//   };

//     componentDidMount() {
//     const mydata = database().ref('blockdates/');
//     mydata.on('value', datasnap => {
//       if (datasnap.val()) {
//         this.setState({dataSource: Object.values(datasnap.val())});
//         console.log("getdata==>",this.state.dataSource)
//       }

//     });

//   }

//   render() {
//     const arrayOfDates=  this.state.dataSource.map(item=>item.selectedDay)
//     var customMarkedDates = {};
//     arrayOfDates.map((day)=>{
//       customMarkedDates[day] ={ selected: true, marked: true, selectedColor: 'red'}
//   })
//     return (
//       <View style={styles.container}>
//         <Calendar
//           markedDates={customMarkedDates}
//           markingType={'multi-dot'}
//           onDayPress={this.onDaySelect}
//           disabledDates={this.state.mydates}
//           style={styles.calendar}
//         />

//         <View
//           style={{
//             height: 'auto',
//             width: '100%',
//             backgroundColor: '#ff5d5b',
//             justifyContent: 'center',
//           }}>
//           <Text style={{fontSize: 20, fontStyle: 'italic'}}>
//             Multiple Dates : {this.state.SampleArray}{' '}
//           </Text>
//         </View>

//         <View style={styles.centeredView}>
//           <Modal
//             animationType="fade"
//             transparent={true}
//             visible={this.state.modalVisible}
//             onRequestClose={() => {
//               Alert.alert('Modal has been closed.');
//             }}>
//             <View style={styles.centeredView}>
//               <View style={styles.modalView}>
//                 <TouchableOpacity
//                   style={{position: 'absolute', right: 10, top: 10}}
//                   onPress={() => {
//                     this.setState({modalVisible:!this.state.modalVisible});
//                   }}
//                 />

//                 <View
//                   style={{
//                     padding: 30,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}>
//                   <TouchableOpacity
//                     onPress={() => {
//                       this.saveDay();
//                       this.AddItemsToArray();
//                     }}
//                     style={[
//                       styles.ButtonStyle,
//                       {
//                         backgroundColor: '#ddd',
//                         borderColor: 'tranparent',
//                         borderWidth: 0,
//                         marginBottom: 10,
//                       },
//                     ]}>
//                     <Text style={{fontSize: 15, padding: 10}}>
//                       {this.state.selectedDay ? 'Block' : null}
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </Modal>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   calendar: {
//     margin: 2,
//   },

//   container: {
//     flex: 1,
//   },

//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 70,
//   },
//   modalView: {
//     width: 300,

//     marginTop: 40,
//     backgroundColor: 'white',
//     borderRadius: 10,

//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },

//   ButtonStyle: {
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     marginBottom: 15,
//     borderRadius: 8,
//   },
// });












// import React,{useState,useEffect} from 'react';
// import {View,Text,FlatList, TouchableOpacity, PermissionsAndroid} from 'react-native';

// import Contacts from 'react-native-contacts';



// const App = () => {
//   const [data,setData] =useState([]);
//   const [contacts,setContacts] =useState(null);
//   const [filterList,setFilterList] = useState([]);
//   const [name,setName] =useState('');
//   const [buttonName,setButtonName] =useState('Add +');

//    useEffect(() => {
//       // fetch('https://jsonplaceholder.typicode.com/users')
//       //  .then(res=>res.json())
//       //  .then(result =>{
//       //    setData(result)

//       //  })


//       if (Platform.OS === 'ios') {
//         Contacts.getAll((err, contacts) => {
//           contacts.sort(
//             (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
//           );
//           try {
//             if (err) {
//               throw err;
//             }
//           } catch (e) {
//             alert('please allow contacts permission from  device setting');
//           }
  
//           setContacts(contacts)
//         });
//       } else if (Platform.OS === 'android') {
//         PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
//           title: 'Contacts',
//           message: 'This app would like to view your contacts.',
//         }).then(() => {
//           Contacts.getAll((err, contacts) => {
//             contacts.sort(
//                       (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
//                     );
//             if (err === 'denied') {
//               // error
//             } else {
              
//               setContacts(contacts)
//             }
//           });
//         });
//       }


//    }, [contacts,filterList])



  
  








// const newList = (item) =>{
//     //alert(item.username)
//     filterList.push({name:item.givenName});
//      setFilterList(filterList)
    
//     console.log("hsdkshkfdshkf====>",filterList)
      
// }



// const newFilterList = (item) =>{
  
//      alert(`This is a ${item.name}`)
//     console.log("hsdkshkfdshkf====>",filterList)
      
// }




// const renderContactList = (item) => (
//       <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',padding:5}}>
//           <Text>{item.givenName}</Text>
    

//         <TouchableOpacity onPress = {()=>newList(item)}
//         style={{width:70,height:25,backgroundColor:'green',paddingHorizontal:10}}>
//           <Text style={{fontSize:12,color:'white',fontWeight:'bold'}}>{buttonName}</Text>
//         </TouchableOpacity>
//       </View>
    
// )


// const renderFilterList = (item) => (
//      <TouchableOpacity style={{flex:1,backgroundColor:'#cccc',marginBottom:5,padding:10}}
//         onPress = {()=>newFilterList(item)}>
//        <Text>{item.name}</Text>
//      </TouchableOpacity>
// )




//   return ( 
//      <View style={{marginTop:10,backgroundColor:'#fff',flex:1}}>
//       <Text style={{color:'black',fontWeight:'bold',textAlign:'center',fontSize:20}}>My List</Text>
//         <FlatList 
//           data={contacts}
//           renderItem={({item})=>renderContactList(item)}
//           keyExtractor={item => item.recordID}
//         />
//     <Text style={{color:'black',fontWeight:'bold',textAlign:'center',fontSize:20}}>Filter List</Text>

//     <FlatList 
//           data={filterList}
//           renderItem={({item})=>renderFilterList(item)}
//           keyExtractor={(item,index)=>index}
//         />
//        </View>

//   )
// }

// export default App;




