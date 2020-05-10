import firebase from 'firebase/app'
import 'firebase/firestore'
export const db = firebase

.initializeApp ({
apiKey: "AIzaSyDFbLz_iPmCEevAj5LoqwuX6L6DdkMbxPw",
authDomain: "vue-test-46013.firebaseapp.com",
databaseURL: "https://vue-test-46013.firebaseio.com",
projectId: "vue-test-46013",
storageBucket: "vue-test-46013.appspot.com",
messagingSenderId: "489683209529",
appId: "1:489683209529:web:0e0beaf2ed00d440a12ce8"
})
.firestore()

export const postRef = db.collection('posts')