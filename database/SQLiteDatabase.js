import { openDatabase } from 'react-native-sqlite-storage';

const db =  openDatabase({ name: 'uni-idosos.db' });

export default db