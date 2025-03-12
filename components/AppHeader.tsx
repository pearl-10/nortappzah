import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

interface AppHeaderProps {
  title?: string;
  showProfileIcon?: boolean;
  showSearchIcon?: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, showProfileIcon = false, showSearchIcon = false }) => {
  return (
    <View style={styles.header}>
    <View style={styles.headerLeft}>
      <Text style={styles.title}>Behind_The_Scenes</Text>
      <View style={styles.socialIconsContainer}>
        <Ionicons name="logo-youtube" size={20} color="#FF0000" style={styles.socialIcon} />
        <FontAwesome name="spotify" size={20} color="#1DB954" style={styles.socialIcon} />
        <Ionicons name="logo-instagram" size={20} color="#C13584" style={styles.socialIcon} />
        <FontAwesome name="twitter" size={20} color="#fff" style={styles.socialIcon} />
      </View>
    </View>
    <View style={styles.searchContainer}>
      <MaterialIcons name="search" size={20} color="#fff" />
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 0,
    marginBottom: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width:'100%'
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
});

export default AppHeader;
