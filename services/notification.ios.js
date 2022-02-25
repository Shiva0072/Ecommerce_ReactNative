import PushNotificationIOS from '@react-native-community/push-notification-ios';

const showNoty = (
  title = 'ShopU',
  message = 'Oder Placed ! Thankyou for shopping with us.',
) => {
  // PushNotificationIOS.addNotificationRequest({
  //   alertTitle: title,
  //   alertBody: message,
  // });
  PushNotificationIOS.presentLocalNotification({
    alertTitle: title,
    alertBody: message,
  });
};

export default showNoty;
