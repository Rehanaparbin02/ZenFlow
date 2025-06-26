import FullYearHorizontalCalendar from '../../components/FullYearHorizontalCalendar'; // adjust path as needed
import { View } from 'react-native';


const HomeScreen = () => (
  <View style={{ flex: 1, marginTop: 50 }}>
    <FullYearHorizontalCalendar />
  </View>
);

export default HomeScreen;