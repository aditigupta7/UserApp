import React,{useState} from 'react';
import {TouchableOpacity,Image,View,StyleSheet,Text} from 'react-native';

const CustomRatingBar = () => {

  const [defaultRating, setDefaultRating] = useState(2);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  // Filled Star. You can also give the path from local
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

    return (
        <View>
            <Text style={styles.textStyle}>
          How was your experience with us ?
        </Text>
        <Text style={styles.textStyleSmall}>
          Please Rate Us
        </Text>


        <Text style={styles.textStyle}>
        {/* To show the rating selected */}
        {defaultRating} / {Math.max.apply(null, maxRating)}
        </Text>

      <View style={styles.customRatingBarStyle}>

        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? {uri: starImageFilled}
                    : {uri: starImageCorner}
                }
              />
            </TouchableOpacity>
          );
        })}


      </View>
      </View>
    );
  };

  export default CustomRatingBar;


  const styles = StyleSheet.create({

  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    flexDirection:'row'
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginTop: 15,
  },
  });