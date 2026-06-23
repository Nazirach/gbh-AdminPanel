
function safeFirebaseCookieDecrypt(cookieName) {
    try {
        var cookieValue = $.cookie(cookieName);
        if (!cookieValue) {
            return '';
        }
        return $.decrypt(cookieValue) || '';
    } catch (error) {
        return '';
    }
}

var firebaseConfig = {
    apiKey: safeFirebaseCookieDecrypt('XSRF-TOKEN-AK'),
    authDomain: safeFirebaseCookieDecrypt('XSRF-TOKEN-AD'),
    databaseURL: safeFirebaseCookieDecrypt('XSRF-TOKEN-DU'),
    projectId: safeFirebaseCookieDecrypt('XSRF-TOKEN-PI'),
    storageBucket: safeFirebaseCookieDecrypt('XSRF-TOKEN-SB'),
    messagingSenderId: safeFirebaseCookieDecrypt('XSRF-TOKEN-MS'),
    appId: safeFirebaseCookieDecrypt('XSRF-TOKEN-AI'),
    measurementId: safeFirebaseCookieDecrypt('XSRF-TOKEN-MI')
}

if (firebaseConfig.apiKey && firebaseConfig.projectId) {
    if (!firebase.apps || firebase.apps.length === 0) { firebase.initializeApp(firebaseConfig); }
} else {
    console.warn("Firebase cookie config missing, skipping secondary init");
}

