import { StatusBar } from 'expo-status-bar';
import { Testando } from './styles';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


export default function Home() {
  const handleNotification = async () => {
    const { status } = await Notifications.getPermissionsAsync();
      if (status!== 'granted') {
        alert('Not granted')
        return;
      }
    
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Teste',
        body: 'Teste',
      },
      trigger: {
        seconds: 3,
      }
    });
  };

  return (
    <>
      <StatusBar style="auto" />
      <Testando title={'notificação'} onPress={handleNotification}></Testando>
    </>
  );
}