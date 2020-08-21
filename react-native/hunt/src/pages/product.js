import React from 'react'

import { WebView } from 'react-native-webview'

function Product({navigation}) {
    return <WebView source={{uri: navigation.state.params.product.url}} />
}

Product.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.title
})

export default Product

