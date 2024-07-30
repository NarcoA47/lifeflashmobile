import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';


import MapView, {UrlTile,  Marker, Circle} from 'react-native-maps'



function MapLocation() {

  const [location, setLocation] = useState(null);
  const [doctor, setDecotor] = useState([]);
  const [radius, setRadius] = useState(1000);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const fetchDoctor = async () => {
    const userLocation = location.coords;

    const doctorSnapshot = await db.collection('shops').get();
    const doctorData = doctorSnapshot.docs.map(doc => doc.data());

    const nearbyDoctors = doctorData.filter(doctor => {
      const distance = getDistance(
        { latitude: userLocation.latitude, longitude: userLocation.longitude },
        { latitude: doctor.location.latitude, longitude: doctor.location.longitude }
      );
      return distance <= radius;
    });

    setDecotor(nearbyDoctors);
  };

  const getDistance = (loc1, loc2) => {
    const R = 6371e3; // Earth radius in meters
    const φ1 = loc1.latitude * Math.PI / 180;
    const φ2 = loc2.latitude * Math.PI / 180;
    const Δφ = (loc2.latitude - loc1.latitude) * Math.PI / 180;
    const Δλ = (loc2.longitude - loc1.longitude) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

  return (
    <View style={styles.container}>
      <View></View>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          showsUserLocation={true}
        >
          <Circle
            center={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            radius={radius}
            strokeColor="rgba(0,0,255,0.5)"
            fillColor="rgba(0,0,255,0.1)"
          />
          {doctor.map((doctor, index) => (
            <Marker
              key={index}
              coordinate={doctor.location}
              title={doctor.doctorName}
            />
          ))}
        </MapView>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
