## React Native Android Setup on Existing App

### How to start

* Open `rnapp/index.js`
* Do required changes in `index.js` file


### How to debug
 * Connect physical device and do `yarn start` from rnapp folder
 * To debug go to url `http://localhost:8081/debugger-ui/`

 * To view metro bundled js file `http://localhost:8081/index.delta?platform=android&dev=true`

 * Inorder to reload js files on your activity
 type `adb shell input keyevent 82` it will enable debug menu to reload

 * If you are on emulator press `Command ⌘ + M`


### How to release

 * `yarn build` will generate bundle on `src/main/assets/index.android.bundle`
 * Then build signed APK


 ### Further references

 1. https://facebook.github.io/react-native/docs/integration-with-existing-apps
 2. https://facebook.github.io/react-native/docs/integration-with-existing-apps
 3. https://codeburst.io/integrating-react-native-into-an-existing-app-android-c27bb1b81574