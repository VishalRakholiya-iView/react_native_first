import { StyleSheet, View, Text } from "react-native";
import WallPaperSetUp from "./fromValidation/WallPaperSetUp";
import StopWatch from "./src/StopWatch";
import Flatlists from "./src/Flatlists";
import BackGroundImg from "./src/BackGroundImg";
import KeyBoard from "./src/KeyBoard";
import Modals from "./src/Modals";
import Switchs from "./src/Switchs";
import Texts from "./src/Texts";
import InputBox from "./src/InputBox";
import Activity from "./src/Activity";
import BtnNfProps from "./src/BtnNfProps";
import Form from "./fromValidation/Form";
import GridSection from "./fromValidation/GridSection";
import RadioBtn from "./fromValidation/RadioBtn";
import DynamicReadio from "./fromValidation/DynamicReadio";
import PressableBtn from "./src/PressableBtn";
import StatusBars from "./src/StatusBars";
import PlatformCop from "./src/PlatformCop";
import MyWebView from "./src/MyWebView";
import CustomModal from "./fromValidation/CustomModal";
import Images from "./src/Images";
import ScrollViews from "./src/ScrollViews";
import SectionLists from "./src/SectionLists";
import DemoSwitch from "./fromValidation/DemoSwitch";
import FlatListDamo from "./demo/FlatListDamo";
import DemoSectionList from "./demo/DemoSectionList";
import TouchHilight from "./src/TouchHilight";
import VartulistionList from "./src/VartulistionList";
import ImageLoad from "./demo/ImageLoad";
import RendomImg from "./demo/RendomImg";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Activity/> */}
      {/* <KeyBoard/> */}
      {/* <BtnNfProps /> */}
      {/* <Flatlists /> */}
      {/* <BackGroundImg/> */}
      {/* <Modals /> */}
      {/* <PressableBtn /> */}
      {/* <StatusBars/> */}
      {/* <Switchs/> */}
      {/* <Images /> */}
      {/* <InputBox /> */}
      {/* <TouchHilight /> */}
      {/* <SectionLists /> */}
      {/* <PlatformCop/> */}
      {/* <Texts/> */}
      {/* <ScrollViews /> */}

      {/* <VartulistionList /> */}
      {/* <MyWebView/> */}
      {/* ======================== */}
      {/* <DemoSwitch /> */}
      {/* <StopWatch/> */}
      {/* <WallPaperSetUp /> */}
      {/* custom compo */}
      {/* <Form/> */}
      {/* <GridSection/> */}
      {/* <RadioBtn/> */}
      {/* <DynamicReadio /> */}
      {/* <CustomModal/> */}

      {/* <FlatListDamo /> */}
      {/* <DemoSectionList /> */}
      {/* <ImageLoad /> */}
      <RendomImg />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  // onEndReached={handleLoadMore} // load the data after scroll
  // onEndReached={pagerander}
  // onEndReachedThreshold={1}
});
