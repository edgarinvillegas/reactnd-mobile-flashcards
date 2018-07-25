import { AsyncStorage } from 'react-native';
import { Permissions, Notifications } from 'expo';
import { isToday } from 'date-fns';

const NOTIFICATION_KEY = 'MOBILE_FLASHCARDS:notifications:lastQuiz';

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

export async function saveQuizDateAndScheduleNextNotification(date) {
    await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(date));
    await scheduleQuizNotification();
}

export async function scheduleQuizNotification() {
    const lastQuizStr = await AsyncStorage.getItem().then(JSON.parse);
    // If user has already answered a quiz, notify starting next day. If not, from current day
    const notificationDelta = lastQuizStr ? +1 : +0;
    
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if(status === 'granted') {
        await Notifications.cancelAllScheduledNotificationsAsync();
        let nextNotificationDate = (auxDate => {
            auxDate.setDate(auxDate.getDate() + notificationDelta);
            auxDate.setHours(19);
            auxDate.setMinutes(0);
            auxDate.setSeconds(0);
        })(lastQuizStr ? new Date(lastQuizStr) : new Date());
        await Notifications.scheduleLocalNotificationAsync(
            getNotificationConfig(),
            {
                time: nextNotificationDate,
                repeat: 'day'
            }
        );
        return true;
    }
    return false;
}