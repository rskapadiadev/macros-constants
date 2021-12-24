import { I18nManager, Platform } from 'react-native';
import colors from './colors';
export const ENABLE_CONSOLE_LOGS = true;

/**
 * App Configs
 */
 export const WHATSAPP_CHAT_LINK = 'https://api.whatsapp.com/send/?phone=96599997371&text&app_absent=0';
 export const APP_CURRENCY = 'KD';
 export const ANDROID_CHANNEL_ID = 'macros.local_notification';
 export const NO_OF_DECIMAL_POINTS_IN_AMOUNT = 2; 
 export const isRTL = I18nManager.isRTL;
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const globalPaddingMargin = {
    whole: 25,
    vertical: 25,
    horizontal: 25,
    left: 10,
    top: 10,
    right: 10,
    bottom: 10,
};

/**
 * My Fatoorah Online Payment Configs
 */
export const ALLOW_ONLINE_PAYMENT = true;
export const MY_FATOORAH_IS_LIVE_ACCOUNT = false;
export const MY_FATOORAH_API_BASE_URL = MY_FATOORAH_IS_LIVE_ACCOUNT ? 'https://api.myfatoorah.com' : 'https://apitest.myfatoorah.com';
export const MY_FATOORAH_API_TOKEN = MY_FATOORAH_IS_LIVE_ACCOUNT ? '96srLSaEHg7Gsckp05ljaDX-2o6nL9m-76EEO2SvcCTCgP8k-ORymSVIX3Hp1RSna_VbrUYbjHlf9paQPTeverZCAU0kHrmXZ5LUhv0LeZFLUuQKNV408A50YfhQ0RWjMRhdPjgtMU-4CTi_GnSowg9Oz3XonCQtiFIJv868IOXc5-vxJ8s9eQUDGS-0mCyx0fKbUijtJuZrBR23ztg3SkKK-Olv9LFdZMoCVrudeYjYLovtVySaU9MDw7zvka_0uZxkAT6CuDZgR4NVLth8YjC65j-y8M4EM8rLUeG0ULOk4EgNAt8VoETZQ8o742BkU2ZG9P3kv_7EuX-4sdGBkuVQg-wqCBF_FtWuWJLkWRSbZta8hAIF30P7QHcLWeFCckRpPBiI_DsK3D7Jj86RyT1si4z9OtgUPfFKQFQ0ourTxgpwAnthKYzx1PBbVqqQwI-nrGM7WzBZGFKxjN9mqAK00FUVCcwonD29nRrQJ-ywwItdeoeJkRyGop4HoA2mp2w994NWWYOZ6XvS5MSkZKpcuzoHphPUnKW1WNvk_G46AuqmNshiVDmf3FxGZuO7Dvs_cGpNCzkHaGQVxt8B91jNd2U1kXbTyNHlcqArO5CLV2ZGblcvn0lofPWMP79n6lV9mf2g7jtVPIFDpUg6W9B4rNZf-YeVBGMAgndzXRJmI3fYiTDnZyHPp2NQI4Pgqiuahw' : 'rLtt6JWvbUHDDhsZnfpAhpYk4dxYDQkbcPTyGaKp2TYqQgG7FGZ5Th_WD53Oq8Ebz6A53njUoo1w3pjU1D4vs_ZMqFiz_j0urb_BH9Oq9VZoKFoJEDAbRZepGcQanImyYrry7Kt6MnMdgfG5jn4HngWoRdKduNNyP4kzcp3mRv7x00ahkm9LAK7ZRieg7k1PDAnBIOG3EyVSJ5kK4WLMvYr7sCwHbHcu4A5WwelxYK0GMJy37bNAarSJDFQsJ2ZvJjvMDmfWwDVFEVe_5tOomfVNt6bOg9mexbGjMrnHBnKnZR1vQbBtQieDlQepzTZMuQrSuKn-t5XZM7V6fCW7oP-uXGX-sMOajeX65JOf6XVpk29DP6ro8WTAflCDANC193yof8-f5_EYY-3hXhJj7RBXmizDpneEQDSaSz5sFk0sV5qPcARJ9zGG73vuGFyenjPPmtDtXtpx35A-BVcOSBYVIWe9kndG3nclfefjKEuZ3m4jL9Gg1h2JBvmXSMYiZtp9MR5I6pvbvylU_PP5xJFSjVTIz7IQSjcVGO41npnwIxRXNRxFOdIUHn0tjQ-7LwvEcTXyPsHXcMD8WtgBh-wxR8aKX7WPSsT1O8d8reb2aR7K3rkV3K82K_0OgawImEpwSvp9MNKynEAJQS6ZHe_J_l77652xwPNxMRTMASk1ZsJL';

/**
 * Developer Default Configs
 */
export const DEVELOPED_BY = 'Apptology';
export const DEVELOPER_WEBSITE_LINK = 'https://apptology.com.kw/';

/**
 * Firebase Mobile Number OTP and Default Country and Digit for Mobile Number Configs
 */
export const MOBILE_NUMBER_PREFIX = '+965' // +965
export const MOBILE_NUMBER_LENGTH = 8; // 8
export const FIREBASE_SEND_OTP_ENABLED = true;
export const FIREBASE_APP_VERIFICATION_DISABLED_FOR_TESTING = false;
export const DEFAULT_OTP = 123456;
export const OTP_LENGTH = 6;

/**
 * Maps Configs
 */
 export const DEFAULT_COORDINATE = {
    latitude: 29.3239607,
    longitude: 48.0503343,
    latitudeDelta: 0.002,
    longitudeDelta: 0.002,
}

/**
 * Subscription And Calender Configs
 */
export const PLAN_MINIMUM_EXPIRE_DAYS = 5;
export const MINIMUM_START_DATE_DURATION_DAYS = 2;
export const WEEK_DAYS = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
}
export const EVENT_OFF_DAY = WEEK_DAYS.FRIDAY;
export const PLAN_TYPE = {
    REGULAR: 'REGULAR',
    CUSTOM_MACROS: 'CUSTOM_MACROS',
    CUSTOM_GRAMS: 'CUSTOM_GRAMS',
}
export const calenderDayType = {
    noPlanExistDay: { key: 'planNotExist' },
    noMealSelectedDay: { key: 'noMealSelectedDay' },
    currentSelection: { key: 'currentSelection', name: 'Current Selection', color: colors.primary_3 },
    selectedDay: { key: 'selectedDay', name: 'Meal Selected', color: colors.primary_1 },
    pausedDay: { key: 'pausedDay', name: 'Paused Day', color: colors.primary_2 },
    offDay: { key: 'offDay', name: 'Off Day', color: colors.xLightGrey },
}
export const calenderDayIndicator = [
    calenderDayType.selectedDay,
    calenderDayType.pausedDay,
    calenderDayType.offDay,
]
