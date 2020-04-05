import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyD0tva5FUYyPBUKBSBypXPCnDCpcr2qw-A',
	authDomain: 'test-b2f14.firebaseapp.com',
	databaseURL: 'https://test-b2f14.firebaseio.com',
	projectId: 'test-b2f14',
	storageBucket: 'test-b2f14.appspot.com',
	messagingSenderId: '425854770392',
	appId: '1:425854770392:web:38dd5093239b6d657b4bad',
	measurementId: 'G-DYV81WM179'
};

let app = null;
if (!firebase.app.length) {
	app = firebase.initializeApp(firebaseConfig);
}

export default firebase;
