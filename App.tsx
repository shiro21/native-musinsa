/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Headers from './app/components/header';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;


function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Headers />
        <FlatList horizontal={true} data={[
          {key: "니트&후드"},
          {key: "추천"},
          {key: "랭킹"},
          {key: "스타일"},
          {key: "세일"},
          {key: "뷰티"},
          {key: "이벤트"},
        ]} renderItem={({item}) => <Text style={styles.mainListText}>{item.key}</Text>} />
      <ScrollView>
        <View>
          <Image style={styles.mainImage} source={require("./assets/images/main.jpg")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainList: {
    display: "flex",
    flexDirection: "row",
  },
  mainListText: {
    fontSize: 16,
    fontWeight: "600",
    padding: 16,
  },
  mainImage: {
    width: "100%",
    height: 500,
  },
});

export default App;
