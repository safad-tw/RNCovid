import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions, FlatList, Button
} from 'react-native';

import LanguagesStrings from './../../localization/LanguagesStrings';
import {Country} from './../../models/Country'

interface TopFiveListProps {
    data: [Country],
    navigateTo: () => void;
}

class TopFiveList extends React.Component<TopFiveListProps> {

    constructor(props: TopFiveListProps) {
        super(props);
    }

    _renderItem(data: any) {
        return (
            <Text style={styles.cardListName}>
                {data.index + 1}. {data.item.Country}
            </Text>
        )
    }

    goToViewAllScreen() {
        this.props.navigateTo()
    }

    render() {
        return (
            <View style={styles.cardView}>
                <FlatList
                    data={this.props.data}
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.CountryCode}
                />
                <Button
                    title={LanguagesStrings.viewAll}
                    color="blue"
                    onPress={() => this.goToViewAllScreen()}
                />
            </View>
        )
    }
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