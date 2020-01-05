import React from 'react';
import { Row } from "react-native-easy-grid";
import { ImageBackground, Text, View } from 'react-native'
import Carousel from 'react-native-looped-carousel'

import Image from '~assets/logo.png';
import styles from './style'



const Slider = props =>{

    const images =[
        {id:1, image:Image,},
        {id:1, image:Image,},
        {id:1, image:Image,},
        {id:1, image:Image,}
    ];
    const components = images.map((image, key) => {
        return(
            <View key={key} style={styles.contentContainer}>
                <ImageBackground source={image.image} style={styles.sliderImage}>
                    <Text style={styles.sliderText}>Image</Text>
                </ImageBackground>
            </View>
        )});

    return(
            <Row >
                <Carousel
                        delay={2000}
                        style={styles.sliderContainer}
                        autoplay
                        bullets
                        >
                        {components}
                </Carousel>
            </Row>
    );
}

export default Slider;