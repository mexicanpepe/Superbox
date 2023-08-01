import React, { useState } from 'react';
import { View, Modal, TextInput, Button, StyleSheet, ScrollView, Text, Switch } from 'react-native';


const AddEditListingModal = ({ modalInfo, onClose, onSave }) => {
  const [listingInfo, setListingInfo] = useState({...modalInfo});
  const [productsList, setProductsList] = useState([{name:'batman 31', id: 1}, {name:'spiderman 20', id: 2}, {name:'superman poster', id: 1}]);
  //axios.get ( all products {productName, product_Id})
  const [isNewProduct, setIsNewProduct] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);



  const handleSave = () => {
    //TODO: add validation logic here before saving the new listing
    // onSave(listingInfo);
    console.log('saved!')
    onClose();
  };
  const handleWriteName = (name) => {
    let regex = new RegExp(name, 'ig');
    setFilteredProducts(productsList.filter((product)=>regex.test(product.name)));
  }

  const handleProductSelection = (product)=>{
    setIsNewProduct(false);
    setListingInfo({...listingInfo, name: product.name});
  }



  return (
    <Modal visible={modalInfo.visible} animationType="slide">
      <View style={styles.container}>
      <TextInput
          placeholder="Product Name"
          value={listingInfo.name}
          onChangeText={handleWriteName}
          style={styles.input}
        />
        {filteredProducts.length > 0 &&
          <ScrollView style={styles.dropdown}>
            {filteredProducts.map((product, index) => <Text key={index} onPress={()=>handleProductSelection(product)}>{product.name}</Text>)}
            <Text onPress={() => setIsNewProduct(true)}>Create new product</Text>
          </ScrollView>
        }
        {isNewProduct &&
          <View style={styles.checkboxContainer}>
            <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} value={isNewProduct} onValueChange={setIsNewProduct} />
            <Text>Creating New Product</Text>
          </View>
        }
        <TextInput
          placeholder="Product Description"
          value={listingInfo.description}
          onChangeText={text => setListingInfo({...listingInfo, description:text})}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button title="Save" onPress={handleSave} />
          <Button title="Cancel" onPress={onClose} color="red" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  dropdown: {
    width: '100%',
    maxHeight: 200,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  }
});

export default AddEditListingModal;