import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
} from 'react-native';
import { styles } from '../style';

class Allcategories extends Component {


    constructor(props) {
        super(props);
        //setting default state
        this.state = {
            entries: [
                {
                    name: 'Eggs',
                    image: require('../../../images/eggs.png')
                },
                {
                    name: 'Meat',
                    image: require('../../../images/meat.png')

                },
                {
                    name: 'Vegetables',
                    image: require('../../../images/oil-bottle.png')

                },
                {
                    name: 'Ghee',
                    image: require('../../../images/onion.png')

                },
            ]
        };


    }
    render() {
        return (
            <View >
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={this.state.entries}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={4}
                    showsVerticalScrollIndicator={false}

                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.ItemClick}>


                                <View style={styles.IconBack}>
                                    <Image
                                        style={styles.CategoriesPic}
                                        source={item.image} />
                                </View>

                                <Text style={styles.CategoriesText}>{item.name}</Text>

                            </TouchableOpacity>
                        );
                    }}
                    enableEmptySections={true}
                    style={{ marginTop: 10 }}
                    keyExtractor={(item, index) => index.toString()}
                />




            </View>
        )
    }
}

export default Allcategories
