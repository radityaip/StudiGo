import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsWdeOcSr-nPr8-xer7GlrKhN4dyBDFIA",
  databaseURL: "https://cobachat-reactnative-default-rtdb.firebaseio.com/",
  projectId: "cobachat-reactnative",
  appId: "1:827462533030:android:c856f4fdcba697d0cb5967",
};

export default Firebase.initializeApp(firebaseConfig);
