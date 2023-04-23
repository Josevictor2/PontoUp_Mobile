import { initializeApp } from '@firebase/app';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
  // your firebase config object here
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase storage
const storage = getStorage(app);

export default storage;
