import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
} from 'react-native';
import { Container, Item, Input, Button, Icon, Content } from 'native-base';
import ActionSecondHeader from '../../../components/header/ActionSecondHeader'
import Allcategories from '../components/Allcategories'
import FeaturedProduct from '../components/FeaturedProduct'
import { styles } from '../style';
import { Colors } from '../../../styles/colors';

class store extends Component {
    render() {
        return (
            <Container style={{ backgroundColor: Colors.IconBack }} >

                <ActionSecondHeader navigation={this.props.navigation} />

                <Content showsVerticalScrollIndicator={false} >
                    <View style={styles.BoxStyle}>
                        <Text style={styles.Allcategorieshead}>
                            All Categories
                    </Text>

                        <Allcategories />

                    </View>

                    <Image
                        style={styles.openPic}
                        source={require('../../../images/next.png')} />

                    {/* Featured product */}

                    <View style={{ marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[styles.Allcategorieshead, { marginLeft: 15 }]}>
                                Featured Products
                                </Text>
                            <Text style={styles.ViewAll}>View All </Text>

                        </View>

                        <FeaturedProduct />
                    </View>


                    {/* NEW product */}


                    <View style={{ marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[styles.Allcategorieshead, { marginLeft: 15 }]}>
                                New Products
                                </Text>
                            <Text style={styles.ViewAll}>View All </Text>
                        </View>

                        <FeaturedProduct />
                    </View>

                </Content>
            </Container>
        )
    }
}

export default store
