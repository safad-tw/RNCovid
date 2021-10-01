#!/bin/sh
echo "Installing npm modules"
rm -rf node_modules/ && yarn cache clean && yarn install

echo "Install pod"
cd ios && rm -rf Pods/ && pod deintegrate && pod install && cd ..

echo "Kill node"
pkill -9 node

echo "Start"
yarn start --reset-cache &>/dev/null &

echo "Run on ios simulator"
react-native run-ios


