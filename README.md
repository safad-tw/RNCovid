# Features!
  - Showscovid data(Global & country list)
  - Allows to report case.
  - list all country covid stats.

# App Architecture
 - initialized using react-native-cli.
 - Used basic UI to show data
 - Used **React-query** to query api from (https://api.covid19api.com/)
 - Used **zustand** for state managgement
 - Added **Localization** to support English and Arabic.
 
 

#### React Native
 - Used **typescript**(.tsx) to create class and functional component

#### API
 - Used https://api.covid19api.com/summary to get data for global and for each country basic covid data.(Few informations are set to zero from API)

 
# Prerequisites

- Node 12.22.6
- iOS 12.1+
- Xcode 13
- Swift 5 
- cocoapod 1.10.1

# Installation
Follow these steps to setup the project 
- Clone the repository into a new folder in your machine; 
- git clone https://github.com/safad-tw/RNCovid.git
- Install and configure the dependencies; 
- Open the Command Prompt and run: 

- Run on iOS simulator
```sh
sh ./scripts/run_ios.sh
 ```
 - Run on Android emulator
```sh
sh ./scripts/run_android.sh
 ```
 - Generate adhoc build(iPA) and upload to app centre
```sh
sh ./scripts/ios_adhoc_ipa.sh <apple_account_email> <appcenter_token_name> <appcenter_team_name> <appcenter_app_name>
 ```
 eg: 
 ```sh
 sh ./scripts/ios_adhoc_ipa.sh "msafad90@gmail.com" "3c7da989eaeb6db984081f0753a11667f0d383d7" "Diet-doctor" "Diet-doctor-Dev"
  ```
  - Generate release build(iPA) and upload to testflight
```sh
sh ./scripts/ios_appstore_ipa.sh <apple_account_email> <api_token> <owner_name> <app_name>
 ```
 
 - Generate android apk and upload to app centre
```sh
sh ./scripts/android_dev_apk.sh <store_password> <alias_password> <appcenter_api_token> <appcenter_team_name> <appcenter_app_name>
 ```
 
 
 # Unit testing using Jest
 - Used jest to run unit and snapshot test
 - All test files are in __tests__
 - Run following command line To run on iOS simulator
```sh
jest
 ```
  # E2E testing using DETOX
 - Used detox 
 - Added config to write E2E test.
 

# Contact
 - Mohammad Safad - msafad90@gmail.com




