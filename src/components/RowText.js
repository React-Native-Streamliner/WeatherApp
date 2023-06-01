import React from "react"
import { View, Text } from 'react-native'

const RowText = (props) => {
    const { description, message, containerStyle, descriptionStyle, messageStyle } = props
    return (
        <View style={containerStyle}>
            <Text style={descriptionStyle}>{description}</Text>
            <Text style={messageStyle}>{message}</Text>
        </View>
    )
}

export default RowText