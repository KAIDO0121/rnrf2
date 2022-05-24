import { StyleSheet, ImageBackground, View, FlatList } from "react-native";
import React from "react";
import { Scene, Router, Alert } from "react-native-router-flux";

const MyTabBar = ({ data, activeTab, onTabPress }) => {
  Alert.alert("Rendered");
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        renderItem={({ item, index }) => {
          const active = index === activeTab;
          return (
            <TabItem
              title={item}
              active={active}
              onPress={() => onTabPress(index)}
            />
          );
        }}
      ></FlatList>
    </View>
  );
};

const TabItem = ({ active, title }) => {
  return (
    <View>
      <TabIcon active={active} title={title} />
    </View>
  );
};

const TabIcon = ({ active, title }) => {
  return (
    <View>
      <Text style={{ color: active ? "active" : "not_ctive" }}>{title}</Text>
    </View>
  );
};

StyleSheet.create({
  container: {
    backgroundColor: "yellow",
  },
  active: {
    backgroundColor: "red",
    color: "#FFFFFF",
  },
  not_ctive: {
    backgroundColor: "gray",
    color: "#FFFFFF",
  },
});

export default MyTabBar;
