import React, { useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import PropertyListings from "../Listings/PropertyListings"; // Fixed typo
import { useFocusEffect } from "@react-navigation/native";

const ExploreScreen = () => {
  // Create a reference for the bottom sheet
  const bottomSheetRef = useRef();

  // Open state, you can control whether the bottom sheet is open or closed
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Use useFocusEffect to open the bottom sheet when ExploreScreen is focused
  useFocusEffect(
    React.useCallback(() => {
      // When the screen comes into focus, open the bottom sheet
      bottomSheetRef.current.open();
      setIsSheetOpen(true);

      // Return a cleanup function to close the bottom sheet when leaving the screen
      return () => {
        bottomSheetRef.current.close();
        setIsSheetOpen(false);
      };
    }, [])
  );

  const closeBottomSheet = () => {
    bottomSheetRef.current.close(); // Close it programmatically
    setIsSheetOpen(false);
  };

  return (
    <View style={styles.container}>
      {/* Bottom Sheet Component */}
      <RBSheet
        ref={bottomSheetRef}
        height={600}
        closeOnDragDown={true} // Allows closing by dragging down
        closeOnPressMask={false} // Allows closing by tapping outside
        customStyles={{
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            borderTopLeftRadius: 30, // Rounded top-left corner
            borderTopRightRadius: 30, // Rounded top-right corner
          },
        }}
      >
        {/* Property Listings inside the Bottom Sheet */}
        <View style={styles.bottomSheetContent}>
          <PropertyListings />
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  closeButton: {
    alignSelf: "flex-end",
    backgroundColor: "#FF4C4C", // Red color for close button
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 10,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ExploreScreen;
