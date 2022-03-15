//定型文
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, bool, shape } from 'prop-types';  //prop-typesを使うのに必要.stringは文字列を表す型

function Hello(props){      //props=world(引数が入っているものとする)
    const {children, bang} =props;
    return (
        <View>
            <Text style={[styles.text, style]}>
                {`Hello ${children}${bang ? '!' : ''}`}             
            </Text>
        </View>
    );
}
 //Hello! {children}
 //{`Hello ${children}`}   :    文字列の連結
Hello.propTypes = {     //Hello.jsxを見た人が、安心してtext内にこの要素を使える。childre(props)の中身の型が何かを定義する
    children: string.isRequired,
    bang:  bool, 
//helloに渡ってくるpropsにはChildrenがある。それはstringの型だと分かる
//.isRequired：引数が必須としている。必須でない場合は初期値が必要
    style: shape(), //初期値代入
}

Hello.default = {
    bang: false,
    style: null, //shape()の初期値
};


//Style sheet
const styles = StyleSheet.create({      //変数の宣言->変数の利用(プロップスと変数を入れ込む)
    text: {
        color: '#ffffff', //文字の色
        backgroundColor: 'blue', //背景色, 
        fontSize: 40, //文字の大きさ、pxなど単位は不要
        fontWeight: 'bold',  //太さ
        padding: 16,    //内側の余白
    },
});

export default Hello;