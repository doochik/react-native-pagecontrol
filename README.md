# react-native-pagecontrol
React Native binding to the iOS [UIPageControl](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIPageControl_Class/index.html).

## Installation with rnpm
1. `npm install --save react-native-pagecontrol`
2. `rnpm link react-native-pagecontrol`

[Click here](http://facebook.github.io/react-native/docs/linking-libraries-ios.html#content) to get more information about linking libraries in React Native.

## Documentation

Supported properties:

* `currentPage` (number) - The current page, shown by the receiver as a white dot.
* `numberOfPages` (number) - The number of pages the receiver shows (as dots).
* `hidesForSinglePage` (boolean) - A Boolean value that controls whether the page control is hidden when there is only one page.
* `pageIndicatorTintColor` (string) - The tint color to be used for the page indicator.
* `currentPageIndicatorTintColor` (string) - The tint color to be used for the current page indicator.
* `onChange` (function) - Callback that is called when the user taps a PageControl; passes the event as an argument. 
* `onValueChange` (function) - Callback that is called when the user taps a PageControl; passes the currentPage value as an argument 

## Example
