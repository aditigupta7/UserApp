import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchBar = () =>{
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
        return (
          <Searchbar
            placeholder="Search for a Services"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
    )
}

const styles = StyleSheet.create({

})

export default SearchBar;