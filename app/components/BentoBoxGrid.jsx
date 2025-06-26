// import React from 'react';
// import { View, StyleSheet, Dimensions } from 'react-native';
// import { CardWithAnimation } from './CardWithAnimation';

// const { width: screenWidth } = Dimensions.get('window');

// // Define constants for padding and gaps to make calculations clear
// const CONTAINER_HORIZONTAL_PADDING = 13; // Padding for the whole grid
// const CARD_GAP = 10; // Gap between individual cards

// const BentoBoxGrid = ({ cardData = [], containerStyle }) => {
//   // Calculate dynamic dimensions for each card type
//   const availableWidth = screenWidth - CONTAINER_HORIZONTAL_PADDING * 2;

//   // Top Row Calculations (remain the same):
//   const largeCardWidth = availableWidth * 0.58 - CARD_GAP / 2;
//   const smallColumnWidth = availableWidth * 0.42 - CARD_GAP / 2;
//   const largeCardHeight = largeCardWidth * 1.2;
//   const smallCardHeight = (largeCardHeight - CARD_GAP) / 2;
//   const smallCardWidth = smallColumnWidth;

//   // Bottom Row Calculations:
//   // For the bottom row, we want the two small cards on the left, and one large card on the right.
//   // The dimensions for these will mirror the top row's structure, just reordered.
//   const bottomTwoCardsColumnWidth = largeCardWidth; // This column will take the space of the 'large' card from top row
//   const bottomSingleCardWidth = smallColumnWidth; // This single card will take the space of the 'small' column from top row

//   const bottomTwoCardsHeight = largeCardHeight; // The combined height of the two cards will match the large card's height
//   const bottomSingleCardHeight = largeCardHeight; // The single card on the right will also match the large card's height

//   const bottomSmallCardHeight = (bottomTwoCardsHeight - CARD_GAP) / 2; // Each of the two cards takes half the height
//   const bottomSmallCardWidth = bottomTwoCardsColumnWidth; // Each of the two cards takes the full width of their column


//   // Ensure cardData has at least 6 items to prevent errors
//   const filledCardData = [...cardData];
//   while (filledCardData.length < 6) {
//     filledCardData.push({}); // Add empty objects for missing cards
//   }

//   return (
//     <View style={[styles.gridContainer, containerStyle]}>
//       {/* Top Row (remains the same) */}
//       <View style={styles.topRow}>
//         {/* Card 1: Large Horizontal */}
//         <CardWithAnimation
//           {...filledCardData[0]}
//           cardStyle={[
//             styles.baseCardStyle,
//             { width: largeCardWidth, height: largeCardHeight, marginRight: CARD_GAP },
//             filledCardData[0].cardStyle,
//           ]}
//         />
//         {/* Column for Card 2 & 3 (Small Vertical) */}
//         <View style={styles.smallCardsColumn}>
//           {/* Card 2 */}
//           <CardWithAnimation
//             {...filledCardData[1]}
//             cardStyle={[
//               styles.baseCardStyle,
//               { width: smallCardWidth, height: smallCardHeight, marginBottom: CARD_GAP },
//               filledCardData[1].cardStyle,
//             ]}
//           />
//           {/* Card 3 */}
//           <CardWithAnimation
//             {...filledCardData[2]}
//             cardStyle={[
//               styles.baseCardStyle,
//               { width: smallCardWidth, height: smallCardHeight },
//               filledCardData[2].cardStyle,
//             ]}
//           />
//         </View>
//       </View>

//       {/* Bottom Row - Mood Log to the right, two cards to the left */}
//       <View style={styles.bottomRow}>
//         {/* Column for Card 4 & 5 (Two cards to the left) */}
//         <View style={[styles.smallCardsColumn, { marginRight: CARD_GAP }]}>
//           {/* Card 4 */}
//           <CardWithAnimation
//             {...filledCardData[3]}
//             cardStyle={[
//               styles.baseCardStyle,
//               { width: bottomSmallCardWidth, height: bottomSmallCardHeight, marginBottom: CARD_GAP },
//               filledCardData[3].cardStyle,
//             ]}
//           />
//           {/* Card 5 */}
//           <CardWithAnimation
//             {...filledCardData[4]}
//             cardStyle={[
//               styles.baseCardStyle,
//               { width: bottomSmallCardWidth, height: bottomSmallCardHeight },
//               filledCardData[4].cardStyle,
//             ]}
//           />
//         </View>
//         {/* Card 6 (Mood Log - single card to the right) */}
//         <CardWithAnimation
//           {...filledCardData[5]}
//           cardStyle={[
//             styles.baseCardStyle,
//             { width: bottomSingleCardWidth, height: bottomSingleCardHeight },
//             filledCardData[5].cardStyle,
//           ]}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   gridContainer: {
//     paddingHorizontal: CONTAINER_HORIZONTAL_PADDING,
//     paddingVertical: 20, // Vertical padding for the whole grid
//   },
//   topRow: {
//     flexDirection: 'row',
//     marginBottom: CARD_GAP, // Gap between top and bottom rows
//     alignItems: 'flex-start', // Align items to the top
//     justifyContent: 'space-between', // Distribute space evenly
//   },
//   smallCardsColumn: {
//     flexDirection: 'column',
//     justifyContent: 'space-between', // Space between the two small cards
//   },
//   bottomRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between', // Distribute space evenly
//   },
//   baseCardStyle: {
//     // No specific sizing here, it's applied dynamically above
//   },
// });

// export default BentoBoxGrid;

import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { CardWithAnimation } from './CardWithAnimation';

const { width: screenWidth } = Dimensions.get('window');

const CONTAINER_HORIZONTAL_PADDING = 13;
const CARD_GAP = 10;

const BentoBoxGrid = ({ cardData = [], containerStyle }) => {
  const availableWidth = screenWidth - CONTAINER_HORIZONTAL_PADDING * 2;

  const largeCardWidth = availableWidth * 0.58 - CARD_GAP / 2;
  const smallColumnWidth = availableWidth * 0.42 - CARD_GAP / 2;
  const largeCardHeight = largeCardWidth * 1.2;
  const smallCardHeight = (largeCardHeight - CARD_GAP) / 2;
  const smallCardWidth = smallColumnWidth;

  const bottomTwoCardsColumnWidth = largeCardWidth;
  const bottomSingleCardWidth = smallColumnWidth;

  const bottomTwoCardsHeight = largeCardHeight;
  const bottomSingleCardHeight = largeCardHeight;

  const bottomSmallCardHeight = (bottomTwoCardsHeight - CARD_GAP) / 2;
  const bottomSmallCardWidth = bottomTwoCardsColumnWidth;

  const filledCardData = [...cardData];
  while (filledCardData.length < 6) {
    filledCardData.push({});
  }

  return (
    <View style={[styles.gridContainer, containerStyle]}>
      <View style={styles.topRow}>
        <CardWithAnimation
          {...filledCardData[0]}
          cardStyle={[
            styles.baseCardStyle,
            { width: largeCardWidth, height: largeCardHeight, marginRight: CARD_GAP },
            filledCardData[0].cardStyle,
          ]}
          onPress={filledCardData[0].onPress} // Pass onPress
        />
        <View style={styles.smallCardsColumn}>
          <CardWithAnimation
            {...filledCardData[1]}
            cardStyle={[
              styles.baseCardStyle,
              { width: smallCardWidth, height: smallCardHeight, marginBottom: CARD_GAP },
              filledCardData[1].cardStyle,
            ]}
            onPress={filledCardData[1].onPress} // Pass onPress
          />
          <CardWithAnimation
            {...filledCardData[2]}
            cardStyle={[
              styles.baseCardStyle,
              { width: smallCardWidth, height: smallCardHeight },
              filledCardData[2].cardStyle,
            ]}
            onPress={filledCardData[2].onPress} // Pass onPress
          />
        </View>
      </View>

      <View style={styles.bottomRow}>
        <View style={[styles.smallCardsColumn, { marginRight: CARD_GAP }]}>
          <CardWithAnimation
            {...filledCardData[3]}
            cardStyle={[
              styles.baseCardStyle,
              { width: bottomSmallCardWidth, height: bottomSmallCardHeight, marginBottom: CARD_GAP },
              filledCardData[3].cardStyle,
            ]}
            onPress={filledCardData[3].onPress} // Pass onPress
          />
          <CardWithAnimation
            {...filledCardData[4]}
            cardStyle={[
              styles.baseCardStyle,
              { width: bottomSmallCardWidth, height: bottomSmallCardHeight },
              filledCardData[4].cardStyle,
            ]}
            onPress={filledCardData[4].onPress} // Pass onPress
          />
        </View>
        <CardWithAnimation
          {...filledCardData[5]}
          cardStyle={[
            styles.baseCardStyle,
            { width: bottomSingleCardWidth, height: bottomSingleCardHeight },
            filledCardData[5].cardStyle,
          ]}
          onPress={filledCardData[5].onPress} // Pass onPress
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    paddingHorizontal: CONTAINER_HORIZONTAL_PADDING,
    paddingVertical: 20,
  },
  topRow: {
    flexDirection: 'row',
    marginBottom: CARD_GAP,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  smallCardsColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  baseCardStyle: {
    // No specific sizing here, it's applied dynamically above
  },
});

export default BentoBoxGrid;