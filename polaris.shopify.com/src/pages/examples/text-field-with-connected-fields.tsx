// import { TextField, Select, Button } from "@shopify/polaris";
// import { useState, useCallback } from "react";
// 
// function ConnectedFieldsExample() {
//   const [textFieldValue, setTextFieldValue] = useState("10.6");
//   const [selectValue, setSelectValue] = useState("kg");
// 
//   const handleTextFieldChange = useCallback(
//     (value) => setTextFieldValue(value),
//     []
//   );
// 
//   const handleSelectChange = useCallback((value) => setSelectValue(value), []);
// 
//   return (
//     <TextField
//       label="Weight"
//       type="number"
//       value={textFieldValue}
//       onChange={handleTextFieldChange}
//       autoComplete="off"
//       connectedLeft={
//         <Select
//           value={selectValue}
//           label="Weight unit"
//           onChange={handleSelectChange}
//           labelHidden
//           options={["kg", "lb"]}
//         />
//       }
//       connectedRight={<Button>Submit</Button>}
//     />
//   );
// }
// 
import { withPolarisExample } from "../../components/PolarisExamplePage";
export default withPolarisExample(() => <p>Polaris Example Tk</p>);
