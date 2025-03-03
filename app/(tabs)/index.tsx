import { StyleSheet, PermissionsAndroid  } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useEffect } from 'react';
// import Geolocation from '@/services/Geolocation';
import Geolocation from 'react-native-geolocation-service';

export default function TabOneScreen() {
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		const requestLocationPermission = async () => {
			try {
				const granted = await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
				);
				if (granted === PermissionsAndroid.RESULTS.GRANTED) {
					console.log('You can use the location');
					Geolocation.getCurrentPosition(
						(position) => {
							console.log(position);
							setLocations([...locations, position]);
						},
						(error) => {
							// See error code charts below.
							console.log(error.code, error.message);
						},
						{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
					);
				} else {
					console.log('Location permission denied');
				}
			} catch (err) {
				console.warn(err);
			}
		};

		requestLocationPermission();

		// return () => {
		//   BackgroundGeolocation.stop();
		// };
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tab One</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
