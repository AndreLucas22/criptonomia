import { openDatabase } from 'react-native-sqlite-storage';
import { AsyncStorage } from 'react-native';
export const openDatabaseHelper = () => {
  //var SQLite = require('react-native-sqlite-storage')
  return openDatabase({ name: 'redeodonto', createFromLocation: "~redeodonto.db" }, () => { },
    error => {
      console.log(error);
    });
}

export const salvarLocal = async (nomeObjeto, objeto, type, dispatch, typeErro, erro) => {

  try {
    await AsyncStorage.setItem(nomeObjeto, objeto);
    dispatch(
      {
        type: type,
        payload: objeto
      }
    );
  } catch (error) {
    console.log(error)
    dispatch(
      {
        type: typeErro,
        payload: erro
      }
    );
  }
};

export const buscarLocal = async (nomeObjeto, type, dispatch, typeErro, erro) => {

  try {
    const value = await AsyncStorage.getItem(nomeObjeto);
    if (value !== undefined && value !== null) {
      dispatch(
        {
          type: type,
          payload: value
        }
      );
    } else {
      dispatch(
        {
          type: typeErro,
          payload: erro
        }
      );
    }
  } catch (error) {
    alert(error)
    dispatch(
      {
        type: typeErro,
        payload: erro
      }
    );
  }
};






