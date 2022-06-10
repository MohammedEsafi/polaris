// import { Button, Popover, ActionList } from "@shopify/polaris";
// import { ImportMinor, ExportMinor, DeleteMinor } from "@shopify/polaris-icons";
// import { useState, useCallback } from "react";
// 
// function ActionListWithDestructiveItemExample() {
//   const [active, setActive] = useState(true);
// 
//   const toggleActive = useCallback(() => setActive((active) => !active), []);
// 
//   const activator = (
//     <Button onClick={toggleActive} disclosure>
//       More actions
//     </Button>
//   );
// 
//   return (
//     <div style={{ height: "250px" }}>
//       <Popover
//         active={active}
//         activator={activator}
//         autofocusTarget="first-node"
//         onClose={toggleActive}
//       >
//         <ActionList
//           actionRole="menuitem"
//           sections={[
//             {
//               title: "File options",
//               items: [
//                 {
//                   active: true,
//                   content: "Import file",
//                   icon: ImportMinor,
//                 },
//                 { content: "Export file", icon: ExportMinor },
//                 {
//                   destructive: true,
//                   content: "Delete file",
//                   icon: DeleteMinor,
//                 },
//               ],
//             },
//           ]}
//         />
//       </Popover>
//     </div>
//   );
// }
// 
import { withPolarisExample } from "../../components/PolarisExamplePage";
export default withPolarisExample(() => <p>Polaris Example Tk</p>);
