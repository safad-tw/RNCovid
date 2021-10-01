#!/bin/sh
rm -rf ~/Library/Developer/Xcode/DerivedData/*
rm -rf node_modules/ && npm install
react-native run-ios
cd ios && rm -rf Pods/ && pod deintegrate && pod install
bundle install
fastlane add_plugin appcenter
fastlane Dev email:$1 api_token:$2 owner_name:$3 app_name:$4
