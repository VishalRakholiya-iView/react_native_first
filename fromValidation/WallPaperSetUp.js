import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";

const wallpapers = [
  {
    id: 1,
    uri: "https://images.unsplash.com/photo-1587669284207-e8ee0fc74144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVlciUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    uri: "https://images.unsplash.com/photo-1619760078865-ee0f4c6586ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    uri: "https://images.unsplash.com/photo-1592478384392-32aaa92ee421?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    uri: "https://images.unsplash.com/photo-1567291612096-635b1896679a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJlZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    uri: "https://images.unsplash.com/photo-1579883463827-40dff935fea1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJlZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    uri: "https://images.unsplash.com/photo-1558257645-bcfa9786d42f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJlZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    uri: "https://images.unsplash.com/photo-1552831125-32128105ea04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGJlZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    uri: "https://images.unsplash.com/photo-1568665449496-c699397e3332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJlZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 9,
    uri: "https://images.unsplash.com/photo-1610478920392-95888b4a0bb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJlZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 10,
    uri: "https://images.unsplash.com/photo-1615474718586-062012d0df41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGJlZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 11,
    uri: "https://images.unsplash.com/photo-1613254025696-6f80f3172937?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGJlZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
  },
];

export default function WallPaperSetUp() {
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);

  const handleSelectWallpaper = (wallpaper) => {
    console.log(wallpaper);
    setSelectedWallpaper(wallpaper);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.wallpapersContainer}>
          {wallpapers.map((wallpaper) => (
            <TouchableOpacity
              key={wallpaper.id}
              onPress={() => handleSelectWallpaper(wallpaper)}
            >
              <Image
                source={{ uri: wallpaper.uri }}
                style={styles.wallpaperImage}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {selectedWallpaper && (
        <View style={styles.selectedWallpaperContainer}>
          <Image
            source={{ uri: selectedWallpaper.uri }}
            style={styles.selectedWallpaperImage}
            resizeMode="cover"
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedWallpaper(null)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wallpapersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 5,
  },
  wallpaperImage: {
    width: 150,
    height: 150,
    margin: 5,
    maxWidth: 200,
  },
  selectedWallpaperContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedWallpaperImage: {
    width: "80%",
    height: "80%",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
  },
});
