import { StyleSheet, View, Text ,StatusBar,TextInput 
  ,ScrollView ,FlatList,navigation } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeHeadNav from '../components/HomeHeadNav'
import UserCard from '../screens/UserCard'
import Categories from '../components/Categories'
import Cardslider from '../components/Cardslider'
import OfferSlider from '../components/OfferSlider'
import { AntDesign } from '@expo/vector-icons'
import style, { colors,necklace, earring} from '../globals/style'

//chain
import { firebase } from '../../Firebase/FirebaseConfig'
import BottomNav from '../components/BottomNav'


const HomeScreen = ({navigation}) => {
// create a hook and blank array
const [jewelryData, setJewelryData] = useState([]);
// const [GoldColorData,setGoldColorData] = useState([]);
// const [SilverColorData,setSilverColorData] =useState([]);
const [earringData ,setEarringData] = useState([]);
const [necklaceData,setNecklaceData] = useState([]);

const jewelryRef = firebase.firestore().collection('JewelryData')

useEffect(()=>{
  jewelryRef.onSnapshot(snapshot => {
    setJewelryData(snapshot.docs.map(doc => doc.data()))
  })
} ,[])
// console.log(jewelryData)


useEffect(()=>{
  setEarringData(jewelryData.filter(item => item.jewelryType =='earring'))
  setNecklaceData (jewelryData.filter(item => item.jewelryType =='necklace'))
},[jewelryData])
// console.log(jewelryData)

const [search,setSearch] = useState('')
  return (
    <View style={styles.container}>
    <StatusBar/>
    <HomeHeadNav navigation={navigation}/>
    
   <View style={styles.Bottomnav}>
   <BottomNav navigation={navigation} />

    </View>

    <ScrollView>
    <View style={styles.searchbox}>
    <AntDesign name="search1" size={24} color="black"
    style={ styles.searchicon} />

    <TextInput style={styles.input} placeholder="Search"
      onChangeText={(text) => {setSearch(text)}}
    />
    </View>
   

    <Categories />
    <OfferSlider />
       <Cardslider title={"Today 's Special Offer"}  data={jewelryData} 
       navigation={navigation} />
       <Cardslider title={ "earring Jewelry"} data={earringData} 
         navigation={navigation}/>
       <Cardslider  title={"necklace Jewelry"} data={necklaceData} 
          navigation={navigation} />
    </ScrollView>
    </View>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
  container:{
    // marginTop:50,
    flex:1,
    backgroundColor:colors.col1,
    // alignItems:'center',
    width:'100%',
  },
  searchbox:{
     flexDirection:'row',
     width:'90%',
    backgroundColor:colors.col1,
    borderRadius:30,
    alignItems:'center',
    padding:10,
    margin:20,
    elevation:10,
  }, 
  input:{
    margin:10,
    width:'90%',
    fontSize: 25,
    color:colors.text1,
  },
  searchicon:{
    color:colors.text1,
  },
  searchresultsouter :{
    width:'100%',
    marginHorizontal:30,
    // height :'40%',
    backgroundColor:colors.col1,
  },
  searchresultinner :{
    width:'100%',
  },
  searchresult:{
    width:'100',
    flexDirection:'row',
    alignItems:'center',
    padding:5,
  },
  searchresulttext:{
    marginLeft :10,
    fontSize: 25,
    color:colors.text1,
  },
  Bottomnav:{
    position: 'absolute',
    bottom:0,
    width:'100%',
    backgroundColor:colors.col1,
    zIndex:20,
  },

})

