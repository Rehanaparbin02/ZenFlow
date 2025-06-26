// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import moment from 'moment';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const FullYearHorizontalCalendar = () => {
//   const [selectedDates, setSelectedDates] = useState([
//     moment().format('YYYY-MM-DD'),
//   ]);

//   // Generate all days for the year starting today
//   const yearStart = moment().startOf('year');
//   const daysArray = Array.from({ length: 366 }, (_, i) =>
//     yearStart.clone().add(i, 'days')
//   );

//   const toggleDateSelection = (date) => {
//     const dateStr = date.format('YYYY-MM-DD');
//     if (selectedDates.includes(dateStr)) {
//       setSelectedDates(selectedDates.filter((d) => d !== dateStr));
//     } else {
//       setSelectedDates([...selectedDates, dateStr]);
//     }
//   };

//   const renderItem = ({ item: date }) => {
//   const dayName = date.format('ddd');
//   const dayNumber = date.format('D');
//   const dateStr = date.format('YYYY-MM-DD');
//   const monthLabel = date.format('MMMM');

//   const isSelected = selectedDates.includes(dateStr);
//   const isUnavailable = !isSelected; // <<< NOW APPLIES TO EVERY DATE

//   const isMonthStart = date.date() === 1;

//   return (
//     <View style={{ alignItems: 'center', marginRight: 16 }}>
//       {isMonthStart && (
//         <Text style={styles.monthHeader}>{monthLabel}</Text>
//       )}
//       <TouchableOpacity
//         onPress={() => toggleDateSelection(date)}
//         style={styles.dayItem}
//         activeOpacity={0.7}
//       >
//         <View
//           style={[
//             styles.circle,
//             isSelected && styles.selectedCircle,
//             isUnavailable && styles.unavailableCircle,
//           ]}
//         >
//           {isSelected ? (
//             <Icon name="check" size={14} color="#FFF" />
//           ) : (
//             <Icon name="times" size={14} color="#FFF" />
//           )}
//         </View>
//         <Text
//           style={[
//             styles.dayLabel,
//             isSelected && styles.selectedLabel,
//             isUnavailable && styles.unavailableLabel,
//           ]}
//         >
//           {dayName}
//         </Text>
//         <Text
//           style={[
//             styles.dateLabel,
//             isSelected && styles.selectedLabel,
//             isUnavailable && styles.unavailableLabel,
//           ]}
//         >
//           {dayNumber}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={daysArray}
//         horizontal
//         renderItem={renderItem}
//         keyExtractor={(item) => item.format('YYYY-MM-DD')}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.stripContainer}
//         initialScrollIndex={moment().diff(moment().startOf('year'), 'days')}
//         getItemLayout={(data, index) => ({
//           length: 90,
//           offset: 90 * index,
//           index,
//         })}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#FFFBE6',
//     paddingVertical: 10,
//   },
//   stripContainer: {
//     paddingHorizontal: 10,
//   },
//   dayItem: {
//     alignItems: 'center',
//     width: 70,
//   },
//   circle: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     borderWidth: 2,
//     borderColor: '#FFCC00',
//     backgroundColor: 'transparent',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   selectedCircle: {
//     backgroundColor: '#FF9500',
//     borderColor: '#FF9500',
//   },
//   unavailableCircle: {
//     backgroundColor: '#A0A0A0',
//     borderColor: '#A0A0A0',
//   },
//   dayLabel: {
//     fontSize: 13,
//     color: '#333',
//     marginTop: 6,
//     fontWeight: '500',
//   },
//   dateLabel: {
//     fontSize: 13,
//     color: '#333',
//     fontWeight: '500',
//   },
//   selectedLabel: {
//     color: '#FF9500',
//     fontWeight: 'bold',
//   },
//   unavailableLabel: {
//     color: '#A0A0A0',
//   },
//   monthHeader: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     color: '#666',
//     marginBottom: 6,
//     textTransform: 'uppercase',
//   },
// });

// export default FullYearHorizontalCalendar;


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import moment from 'moment';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const FullYearHorizontalCalendar = () => {
//   const today = moment().format('YYYY-MM-DD');
//   const [selectedDates, setSelectedDates] = useState([today]); // Initialize with today selected

//   // For demonstration, let's assume 'Tue' is always unavailable as per the image
//   const unavailableDaysOfWeek = ['Tue']; // Days of the week that are unavailable

//   // Generate days for the current week for demonstration purposes
//   // To match the image, we'll only show Sun to Sat, focusing on the current week.
//   // In a full year calendar, you'd iterate through the year as you started.
//   // For exact match to the image, let's create a fixed array for the current week
//   // starting from Sunday before the current Wednesday.

//   // Find the Sunday of the current week
//   const startOfWeek = moment().day(0); // 0 for Sunday

//   const daysArray = Array.from({ length: 7 }, (_, i) =>
//     startOfWeek.clone().add(i, 'days')
//   );


//   const toggleDateSelection = (date) => {
//     const dateStr = date.format('YYYY-MM-DD');
//     const dayName = date.format('ddd');

//     // Prevent selecting unavailable days
//     if (unavailableDaysOfWeek.includes(dayName)) {
//       return;
//     }

//     if (selectedDates.includes(dateStr)) {
//       // If the date is already selected, unselect it.
//       setSelectedDates(selectedDates.filter((d) => d !== dateStr));
//     } else {
//       // If the date is not selected, select it.
//       setSelectedDates([...selectedDates, dateStr]);
//     }
//   };

//   const renderItem = ({ item: date }) => {
//     const dayName = date.format('ddd');
//     const dateStr = date.format('YYYY-MM-DD');

//     const isSelected = selectedDates.includes(dateStr);
//     const isToday = dateStr === today; // Highlight today if needed, for 'Wed' in image
//     const isUnavailable = unavailableDaysOfWeek.includes(dayName);

//     return (
//       <View style={styles.dayColumn}>
//         <TouchableOpacity
//           onPress={() => toggleDateSelection(date)}
//           style={styles.dayItem}
//           activeOpacity={isUnavailable ? 1 : 0.7} // Disable touch feedback for unavailable days
//         >
//           <View
//             style={[
//               styles.circle,
//               isSelected && styles.selectedCircle,
//               isUnavailable && styles.unavailableCircle,
//             ]}
//           >
//             {isUnavailable ? (
//               <Icon name="times" size={14} color="#FFF" />
//             ) : (
//               <Icon name="check" size={14} color="#FFF" />
//             )}
//           </View>
//           <Text
//             style={[
//               styles.dayLabel,
//               isSelected && styles.selectedLabel,
//               isToday && styles.todayLabel, // Apply specific style for today ('Wed' in image)
//               isUnavailable && styles.unavailableLabel,
//             ]}
//           >
//             {dayName}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };


//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={daysArray}
//         horizontal
//         renderItem={renderItem}
//         keyExtractor={(item) => item.format('YYYY-MM-DD')}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.stripContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#FFFBE6', // Background color from the image
//     paddingVertical: 10,
//   },
//   stripContainer: {
//     paddingHorizontal: 10,
//     justifyContent: 'center', // Center the items
//     alignItems: 'center',
//   },
//   dayColumn: {
//     alignItems: 'center',
//     marginHorizontal: 8, // Adjust spacing between days
//   },
//   dayItem: {
//     alignItems: 'center',
//     // Removed fixed width for dayItem to allow content to dictate width
//   },
//   circle: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     borderWidth: 2,
//     borderColor: '#FFCC00', // Yellow border for unselected/available
//     backgroundColor: 'transparent', // Default transparent
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   selectedCircle: {
//     backgroundColor: '#FF9500', // Orange background for selected
//     borderColor: '#FF9500', // Orange border for selected
//   },
//   unavailableCircle: {
//     backgroundColor: '#A0A0A0', // Grey background for unavailable
//     borderColor: '#A0A0A0', // Grey border for unavailable
//   },
//   dayLabel: {
//     fontSize: 14, // Slightly larger font for day names
//     color: '#333',
//     marginTop: 6,
//     fontWeight: '500',
//   },
//   selectedLabel: {
//     color: '#FF9500', // Orange color for selected day name
//     fontWeight: 'bold', // Bold for selected day name
//   },
//   todayLabel: {
//     fontSize: 18, // Larger font size for 'Wed' to make it prominent
//     fontWeight: 'bold', // Bold for 'Wed'
//   },
//   unavailableLabel: {
//     color: '#A0A0A0', // Grey color for unavailable day name
//   },
//   // Removed dateLabel and monthHeader as they are not present in the provided image.
// });

// export default FullYearHorizontalCalendar;


import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

const FullYearHorizontalCalendar = () => {
  const today = moment().format('YYYY-MM-DD');
  const [selectedDates, setSelectedDates] = useState([today]);

  // Mark Tuesdays as unavailable (optional logic)
  const unavailableDaysOfWeek = ['Tue'];

  const yearStart = moment().startOf('year');
  const yearEnd = moment().endOf('year');
  const daysArray = [];

  for (
    let date = yearStart.clone();
    date.isSameOrBefore(yearEnd);
    date.add(1, 'day')
  ) {
    daysArray.push(date.clone());
  }

  const toggleDateSelection = (date) => {
    const dateStr = date.format('YYYY-MM-DD');
    const dayName = date.format('ddd');

    // Prevent selecting unavailable days
    if (unavailableDaysOfWeek.includes(dayName)) return;

    if (selectedDates.includes(dateStr)) {
      setSelectedDates(selectedDates.filter((d) => d !== dateStr));
    } else {
      setSelectedDates([...selectedDates, dateStr]);
    }
  };

  const renderItem = ({ item: date }) => {
    const dateStr = date.format('YYYY-MM-DD');
    const dayName = date.format('ddd');
    const dayNumber = date.format('D');
    const monthName = date.format('MMMM');
    const isSelected = selectedDates.includes(dateStr);
    const isUnavailable = !isSelected;
    const isMonthStart = date.date() === 1;

    return (
      <View style={styles.dayColumn}>
        {isMonthStart && (
          <Text style={styles.monthHeader}>{monthName}</Text>
        )}
        <TouchableOpacity
          onPress={() => toggleDateSelection(date)}
          style={styles.dayItem}
          activeOpacity={isUnavailable ? 1 : 0.7}
        >
          <View
            style={[
              styles.circle,
              isSelected && styles.selectedCircle,
              isUnavailable && styles.unavailableCircle,
            ]}
          >
            {isSelected ? (
              <Icon name="check" size={14} color="#FFF" />
            ) : (
              <Icon name="times" size={14} color="#FFF" />
            )}
          </View>
          <Text
            style={[
              styles.dayLabel,
              isSelected && styles.selectedLabel,
              isUnavailable && styles.unavailableLabel,
            ]}
          >
            {dayName}
          </Text>
          <Text
            style={[
              styles.dayNumberLabel,
              isSelected && styles.selectedLabel,
              isUnavailable && styles.unavailableLabel,
            ]}
          >
            {dayNumber}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={daysArray}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.format('YYYY-MM-DD')}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.stripContainer}
        initialScrollIndex={moment().diff(moment().startOf('year'), 'days')}
        getItemLayout={(_, index) => ({
          length: 80,
          offset: 80 * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFBE6',
    paddingVertical: 12,
  },
  stripContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  dayColumn: {
    alignItems: 'center',
    marginRight: 14,
  },
  dayItem: {
    alignItems: 'center',
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#FFCC00',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCircle: {
    backgroundColor: '#FF9500',
    borderColor: '#FF9500',
  },
  unavailableCircle: {
    backgroundColor: '#A0A0A0',
    borderColor: '#A0A0A0',
  },
  dayLabel: {
    fontSize: 14,
    color: '#333',
    marginTop: 6,
    fontWeight: '500',
  },
  dayNumberLabel: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  selectedLabel: {
    color: '#FF9500',
    fontWeight: 'bold',
  },
  unavailableLabel: {
    color: '#A0A0A0',
  },
  monthHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
});

export default FullYearHorizontalCalendar;
