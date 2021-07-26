var firebaseConfig = {
    apiKey: "AIzaSyBPw2rL_HclI977tLz6J0yvqo8ZYoaNatU",
    authDomain: "warriors-results.firebaseapp.com",
    databaseURL: "https://warriors-results-default-rtdb.firebaseio.com",
    projectId: "warriors-results",
    storageBucket: "warriors-results.appspot.com",
    messagingSenderId: "644209350413",
    appId: "1:644209350413:web:17c37844c5e8fc1cd2c244"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  document.getElementById('mainForm').addEventListener('submit',submitForm);
function submitForm(e)
{
  e.preventDefault();
  var y=document.getElementById("year").value;
  y=y.toLowerCase();
  readResults(y);
}
function readResults(year)
{
  var results=firebase.database().ref(year);
  results.on('value',(data)=>{
    var rank=data.val();
    document.getElementById("result").innerHTML="<br> The Warriors finished: "+rank+" in "+year;
  })
}