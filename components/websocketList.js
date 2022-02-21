
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button } from 'react-native';
// import { navigationRef } from '../routes/RootNavigation';

const ListWSMovies = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
    //   const response = await fetch('https://reactnative.dev/movies.json');
    //   const json = await response.json();

      var ws = new WebSocket('ws://host.com/path');

        ws.onopen = () => {
        // connection opened
        ws.send('something'); // send a message
        };

        ws.onmessage = (e) => {
            // a message was received
            console.log(e.data);
            setData(e.data);
        };

        ws.onerror = (e) => {
            // an error occurred
            console.log(e.message);
        };

        ws.onclose = (e) => {
            // connection closed
            console.log(e.code, e.reason);
        };
 
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </View>
  );
};

export default ListWSMovies;