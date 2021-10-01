#!/bin/bash -l

echo "Replace app name"


echo "set android path"
export ANDROID_HOME=~/Library/Android/sdk
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/tools:$PATH

rm -rf node_modules/ && npm install

react-native run-android
cd android
fastlane add_plugin appcenter
./gradlew clean
./gradlew assembleRelease
fastlane Dev store_password:$1 alias_password:$2 api_token:$3 owner_name:$4 app_name:$5
