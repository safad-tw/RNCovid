import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions, FlatList, Button
} from 'react-native';

import LanguagesStrings from './../../localization/LanguagesStrings';
import { Country } from './../../models/Country'

interface TopFiveListProps {
    data: [Country],
    navigateTo: () => void;
}

const TopFiveList = (props: TopFiveListProps) => {

    const goToViewAllScreen = () => {
        props.navigateTo()
    }

    const renderItem = (data: any) => {
        return (
            <Text style={styles.cardListName}>
                {data.index + 1}. {data.item.Country}
            </Text>
        )
    }

    return (
        <View style={styles.cardView}>
            <FlatList
                data={props.data}
                renderItem={renderItem}
                keyExtractor={(item) => item.CountryCode}
            />
            <Button
                title={LanguagesStrings.viewAll}
                color="blue"
                onPress={() => goToViewAllScreen()}
            />
        </View>
    )

}


const width = Dimensions.get('window').width - 20;

const styles = StyleSheet.create({
    cardView: {
        height: 200,
        width: width,
        margin: 5,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        borderRadius: 5,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    cardListName: {
        margin: 5,
        textAlign: 'left',
        fontSize: 17,
        fontFamily: "Avenir-medium"
    }

})

export default TopFiveList;