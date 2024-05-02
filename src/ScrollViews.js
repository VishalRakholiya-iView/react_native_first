import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const ScrollViews = () => {
  //   const handleScroll = (event) => {
  //     const { x, y } = event.nativeEvent.contentOffset;
  //     console.log("Scroll position:", { x, y });
  //   };

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.main}
        // onScroll={handleScroll} // x and y position
        // contentOffset={{ x: 200, y: 400 }}
        // decelerationRate="fast" // scroll speed by default norrmal
        // overScrollMode="never" // scroll end and start color
        // horizontal={true}
        // showsHorizontalScrollIndicator={false} show the scroll line after true
        // endFillColor={"green"}
        // snapToInterval={200} // inretval value set niche thi
        // snapToAlignment="center" // center ,end ,statr
        // persistentScrollbar={true}// scoll no use nahoy tyare hide thay jay
        // scrollEnabled={false}
        // showsVerticalScrollIndicator={false} // hide the vertical scroll
        // fadingEdgeLength={100} // ?
        // disableIntervalMomentum={true} // ?
      >
        <View>
          <View>
            <Text style={{ fontSize: 26, backgroundColor: "aqua" }}>
              When true, the scroll view bounces when it reaches the end of the
              content if the content is larger than the scroll view along the
              axis of the scroll direction. When false, it disables all bouncing
              even if the alwaysBounce* props are true. When true, the scroll
              view bounces when it reaches the end of the content if the content
              is larger than the scroll view along the axis of the scroll
              direction. When false, it disables all bouncing even if the
              alwaysBounce* props are true. When true, the scroll view bounces
              when it reaches the end of the content if the content is larger
              than the scroll view along the axis of the scroll direction. When
              false, it disables all bouncing even if the alwaysBounce* props
              are true. When true, the scroll view bounces when it reaches the
              end of the content if the content is larger than the scroll view
              along the axis of the scroll direction. When false, it disables
              all bouncing even if the alwaysBounce* props are true. When true,
              the scroll view bounces when it reaches the end of the content if
              the content is larger than the scroll view along the axis of the
              scroll direction. When false, it disables all bouncing even if the
              alwaysBounce* props are true. When true, the scroll view bounces
              when it reaches the end of the content if the content is larger
              than the scroll view along the axis of the scroll direction. When
              false, it disables all bouncing even if the alwaysBounce* props
              are true. are true. When true, the scroll view bounces when it
              reaches the end of the content if the content is larger than the
              scroll view along the axis of the scroll direction. When false, it
              disables all bouncing even if the alwaysBounce* props are true.
              When true, the scroll view bounces when it reaches the end of the
              content if the content is larger than the scroll view along the
            </Text>
            <Text style={{ fontSize: 26, backgroundColor: "#ecf0f1" }}>
              When true, the scroll view bounces when it reaches the end of the
              content if the content is larger than the scroll view along the
              axis of the scroll direction. When false, it disables all bouncing
              even if the alwaysBounce* props are true. When true, the scroll
              view bounces when it reaches the end of the content if the content
              is larger than the scroll view along the axis of the scroll
              direction. When false, it disables all bouncing even if the
              alwaysBounce* props are true. When true, the scroll view bounces
              when it reaches the end of the content if the content is larger
              than the scroll view along the axis of the scroll direction. When
              false, it disables all bouncing even if the alwaysBounce* props
              are true. When true, the scroll view bounces when it reaches the
              end of the content if the content is larger than the scroll view
              along the axis of the scroll direction. When false, it disables
              all bouncing even if the alwaysBounce* props are true. When true,
              the scroll view bounces when it reaches the end of the content if
              the content is larger than the scroll view along the axis of the
              scroll direction. When false, it disables all bouncing even if the
              alwaysBounce* props are true. When true, the scroll view bounces
              when it reaches the end of the content if the content is larger
              than the scroll view along the axis of the scroll direction. When
              false, it disables all bouncing even if the alwaysBounce* props
              are true. are true. When true, the scroll view bounces when it
              reaches the end of the content if the content is larger than the
              scroll view along the axis of the scroll direction. When false, it
              disables all bouncing even if the alwaysBounce* props are true.
              When true, the scroll view bounces when it reaches the end of the
              content if the content is larger than the scroll view along the
            </Text>
            <TextInput placeholder="Enter Your name...." style={styles.input} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 20,
    padding: 10,
    marginTop: 20,
  },
});
export default ScrollViews;
