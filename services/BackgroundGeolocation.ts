import BackgroundGeolocation, { DISTANCE_FILTER_PROVIDER, HIGH_ACCURACY } from '@mauron85/react-native-background-geolocation';

BackgroundGeolocation.configure({
  desiredAccuracy: HIGH_ACCURACY,
  stationaryRadius: 50,
  distanceFilter: 50,
  notificationTitle: 'Background tracking',
  notificationText: 'Enabled',
  debug: false,
  startOnBoot: false,
  stopOnTerminate: true,
  locationProvider: DISTANCE_FILTER_PROVIDER,
  interval: 10000, // Update interval in milliseconds
  fastestInterval: 5000,
  activitiesInterval: 10000,
  stopOnStillActivity: false,
});

export default BackgroundGeolocation;
