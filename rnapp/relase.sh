mkdir ./CodePush

react-native bundle --platform android \
--entry-file index.js \
--bundle-output ./CodePush/index.android.bundle \
--assets-dest ./CodePush \
--dev false

appcenter codepush release -a selvaganesh.93/cp-android-native -c ./CodePush -t 1.0.0
