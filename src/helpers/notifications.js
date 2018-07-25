import { AsyncStorage } from 'react-native';
import { Permissions, Notifications } from 'expo';

const NOTIFICATION_KEY = 'MOBILE_FLASHCARDS:notifications:lastStudyingReminderScheduled';

function getNotificationConfig() {
    return {
        title: 'Study',
        body: '👋 Don\'t forget to study today!',
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'medium',
            sticky: false,
            vibrate: true
        }
    }
}


export async function notifyStudying() {
    const alreadyScheduled = !!await AsyncStorage.getItem().then(JSON.parse);
    // If there was already a reminder today
    // if(lastReminder && isToday(new Date(lastReminder))) return false;
    if(alreadyScheduled) return false;
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if(status === 'granted') {
        await Notifications.cancelAllScheduledNotificationsAsync();
        let tomorrowMorning = (auxDate => {
            auxDate.setDate(auxDate.getDate() + 1);
            auxDate.setHours(8);
            auxDate.setMinutes(0);
            auxDate.setSeconds(0);
        })(new Date());
        await Notifications.scheduleLocalNotificationAsync(
            getNotificationConfig(),
            {
                time: tomorrowMorning,
                repeat: 'day'
            }
        );
        await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
    }
    return false;
}