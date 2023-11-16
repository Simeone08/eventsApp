import { StatusBar } from 'expo-status-bar';
import { Platform, Text } from 'react-native';
import { 
  Container,
  ResumeContainer,
  Notificacao,
 } from './styles';
import * as Notifications from 'expo-notifications';
import { Resume } from '../../components/resume';
import { useNavigation } from '@react-navigation/native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});


export default function Home() {
  const navigation = useNavigation();

  const handleNotification = async () => {
    
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Teste',
        body: 'Teste',
      },
      trigger: null,
    });
  };


  return (
    <>
      <Container>
        <StatusBar style="auto" />
        <ResumeContainer>
          <Resume
            image='https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            title='Conteúdos'
            onPress={() => navigation.navigate('Conteúdo')}
          />
          <Resume
            image='https://images.unsplash.com/photo-1496115965489-21be7e6e59a0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            title='Parceiros'
            onPress={() => navigation.navigate('Parceiros')}
          />
          <Resume
            image='https://images.unsplash.com/photo-1642359085898-d9fde39507c9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            title='Programação'
            onPress={() => navigation.navigate('Programação')}
          />
          <Resume 
            image='https://images.unsplash.com/photo-1561314105-e6ac04c2984a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title='Palestantes'
            onPress={() => navigation.navigate('Palestrantes')}
          />
        </ResumeContainer>

      </Container>
        
        
        <Notificacao title={'notificação'} onPress={handleNotification}>
          <Text style={{fontWeight:'700', color:'#FF0000' }}>Notificação</Text>
        </Notificacao>
        
    </>
  );
}