import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import InputText from "./components/InputText";
function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetchFormJson();
  });
  const API_URL =
    "http://localhost:8080/api/jsonws/pai.reactprovider/retrieve-form-json";

  //fetching DDMStructure in json by hitting liferay API
  const fetchFormJson = async () => {
    try {
      const res = await axios.get(API_URL, {
        auth: {
          username: "test@liferay.com",
          password: "Test@123",
        },
      });
      // console.log(res.data.fields);
      //console.log(JSON.stringify(res.data.fields));
      setData(JSON.stringify(res.data.fields, null, 2));
    } catch (error) {
      console.log(error);
    }
  };

  //Check field types
  const checkFieldTypes = () => {
    console.log(typeof data); //string
    const fields = data; //setting field data on initial render in useEffect
    const fieldArray = []; //to store type of field
    const fieldsJsonArray = JSON.parse(fields); //convertin string json to jsonarray;
    console.log(fieldsJsonArray);
    //iterating each object and getting properties of one field at a time.
    for (let i = 0; i < fieldsJsonArray.length; i++) {
      const field = fieldsJsonArray[i];
      fieldArray.push(field.type); //preparing list of field types
      const fieldType = fieldArray[i];
      console.log(`field ${i} ` + fieldType);
    }
    console.log("end of checkFieldType");
  };

  return (
    <>
      <div className="app">
        <button onClick={fetchFormJson}>Fetch Form Data</button>
        <button onClick={checkFieldTypes}>Check Field Type</button>
      </div>
    </>
  );
}
export default App;
