import React, { useRef, useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import PropertyListings from "../Listings/PropertyListings"; // Fixed typo

const ExploreScreen = () => {
  // Create a reference for the bottom sheet
  const bottomSheetRef = useRef();
  const [isSheetOpen, setIsSheetOpen] = useState(true);

  // Open the bottom sheet when the component mounts
  useEffect(() => {
    if (isSheetOpen === true) {
      bottomSheetRef.current.open();
    }
  }, []);

  const closeBottomSheet = () => {
    setIsSheetOpen(false); // Manually close the bottom sheet
    bottomSheetRef.current.close(); // Close it programmatically
  };

  return (
    <View style={styles.container}>
      {/* Bottom Sheet Component */}
      <RBSheet
        ref={bottomSheetRef}
        height={600} // You can adjust the height as needed
        closeOnDragDown={false} // Allows closing by dragging down
        closeOnPressMask={false} // Disables backdrop (no dark overlay)
        customStyles={{
          container: {
            borderTopLeftRadius: 30, // Rounded top-left corner
            borderTopRightRadius: 30, // Rounded top-right corner
            overflow: "hidden", // Ensures the corners are rounded correctly
          },
        }}
      >
        {/* Property Listings inside the Bottom Sheet */}
        <View style={styles.bottomSheetContent}>
          {/* Property Listings Component */}
          <PropertyListings closeBottomSheet={closeBottomSheet} />
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  bottomSheetContent: {
    flex: 1,
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
