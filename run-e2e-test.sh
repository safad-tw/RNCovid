#!/bin/sh
react-native run-ios
username=$(whoami)
cp -R /Users/"$username"/Library/Developer/Xcode/DerivedData/*Covid*/Build/Products/Debug-iphonesimulator/Covid.app ./ios/build/Build/Products/Debug-iphonesimulator/
npm run test:ios
