// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: 'dynamic-web-app-final.firebaseapp.com',
	projectId: 'dynamic-web-app-final',
	storageBucket: 'dynamic-web-app-final.appspot.com',
	messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
	appId: process.env.REACT_APP_APP_ID,
};

export default firebaseConfig;
