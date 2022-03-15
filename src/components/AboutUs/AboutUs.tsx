import { View, Text } from "react-native"
import { AboutUsStyles } from "./AboutUsStyles"
import { Link } from 'react-router-native'

export const AboutUs = () => {
    return (
        <View style={AboutUsStyles.main}>
            <Text>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum    
            </Text>
            <Link to={'/'}>
                        <Text>Back</Text>
            </Link>
        </View>
    )
}