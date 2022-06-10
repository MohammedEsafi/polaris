// import { Button } from "@shopify/polaris";
// import { useState } from "react";
// 
// function RightAlignedDisclosureButton() {
//   const [expanded, setExpanded] = useState(false);
// 
//   return (
//     <div style={{ width: "200px" }}>
//       <Button
//         fullWidth
//         textAlign="left"
//         disclosure={expanded ? "up" : "down"}
//         onClick={() => setExpanded(!expanded)}
//       >
//         {expanded ? "Show less" : "Show more"}
//       </Button>
//     </div>
//   );
// }
// 
import { withPolarisExample } from "../../components/PolarisExamplePage";
export default withPolarisExample(() => <p>Polaris Example Tk</p>);
