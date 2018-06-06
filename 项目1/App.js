import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';



class First extends Component{
    render(){
        return(
            <View style={{flexDirection:"row",height:160}}>
                <View style={{borderWidth:1,borderColor:'red',flex:1}}>
                    <Text style={{fontSize:30}}> 1.我们约吧</Text>
                </View>

                <View style={{borderWidth:1,borderColor:'blue',flex:2}}>
                    <Text style={{fontSize:30}}>2。超低价值</Text>
                </View>
            </View>
            );
    }
}


export default class App extends Component{

    render(){
        return (
          <View>
            {/*第一个部分*/}
            <First />


        {/*第二个部分*/}

            <View>

            </View>


        {/*第三个部分*/}

            <View>

            </View>

          </View>
        );
    }
}





/*


 <View style={{ flexDirection:"row", height:160}}>
                <View style={{flex:1,height:160,borderWidth:1,borderColor:'red'}}>
                    <Text style={{fontSize:90}}> 1</Text>
                </View>

                <View style={{ flex:2,borderWidth:1,borderColor:'blue',height:160}}>
                    <Text style={{fontSize:90}}>2</Text>
                </View>
           </View>
*/

const styles = StyleSheet.create({
   
});