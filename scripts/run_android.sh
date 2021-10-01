#!/bin/sh
if [[ -z "${ANDROID_HOME}" ]]
then
    echo "set android path"
    export ANDROID_HOME=~/Library/Android/sdk
	export PATH=$ANDROID_HOME/platform-tools:$PATH
	export PATH=$ANDROID_HOME/tools:$PATH
fi

echo "Installing npm modules"
rm -rf node_modules/ && yarn cache clean && yarn install


echo "Kill node"
pkill -9 node

echo "Start"
yarn start --reset-cache &>/dev/null &

echo "Generate debug apk"
cd android && ./gradlew clean && ./gradlew assembleDebug && cd ..

echo "List adb devices"
adb kill-server && adb start-server
devices=`$ANDROID_HOME/emulator/emulator -list-avds`
echo "$devices"
$ANDROID_HOME/emulator/emulator -avd $devices &>/dev/null &

echo "Run on android simulator"
react-native run-android





