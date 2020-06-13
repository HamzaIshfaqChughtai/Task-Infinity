import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
} from 'react-native';
import { styles } from '../style';
import { Colors } from '../../../styles/colors';

class FeaturedProduct extends Component {


    constructor(props) {
        super(props);
        //setting default state
        this.state = {
            Featuredproduct: [
                {
                    kg: '1400G',
                    image: require('../../../images/ginger.png'),
                    heart: require('../../../images/hearthfill.png'),
                    type: 'Ginger',
                    Rs: "Rs.60.00"
                },
                {
                    kg: '1400G',
                    image: require('../../../images/ginger.png'),
                    heart: require('../../../images/hearthfill.png'),
                    type: 'Ginger',
                    Rs: "Rs.60.00"

                },
                {
                    kg: '1400G',
                    image: require('../../../images/ginger.png'),
                    heart: require('../../../images/hearthfill.png'),
                    type: 'Ginger',
                    Rs: "Rs.60.00"

                },
                {
                    kg: '1400G',
                    heart: require('../../../images/hearthfill.png'),
                    image: require('../../../images/ginger.png'),
                    type: 'Ginger',
                    Rs: "Rs.60.00"

                },
            ]
        };


    }
    render() {
        return (
            <View style={{ backgroundColor: Colors.IconBack }} >
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.Featuredproduct}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                key={index}
                                style={styles.FeaturedBox}>

                                <View style={styles.featuredproduct}>

                                    <View style={styles.FeaturedFirstROW}>

                                        <View style={styles.kgView}>
                                            <Text style={styles.kgtext}>{item.kg}</Text>
                                        </View>

                                        <Image
                                            style={styles.Item}
                                            source={item.heart} />
                                    </View>

                                    <Image
                                        style={styles.SelectedItem}
                                        source={item.image} />

                                    <Text style={styles.itemType}>{item.type}</Text>
                                    <Text style={styles.itemRs}>{item.Rs}</Text>

                                </View>


                            </TouchableOpacity>
                        );
                    }
                    }
                    enableEmptySections={true}
                    style={{ marginTop: 10 }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View >
        )
    }
}

export default FeaturedProduct
