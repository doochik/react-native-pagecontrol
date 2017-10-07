#import "RCTPageControlManager.h"
#import "RCTPageControl.h"

@implementation RCTPageControlManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [RCTPageControl new];
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_VIEW_PROPERTY(currentPage, NSInteger)
RCT_EXPORT_VIEW_PROPERTY(numberOfPages, NSInteger)
RCT_EXPORT_VIEW_PROPERTY(hidesForSinglePage, BOOL)

RCT_EXPORT_VIEW_PROPERTY(pageIndicatorTintColor, UIColor)
RCT_EXPORT_VIEW_PROPERTY(currentPageIndicatorTintColor, UIColor)

RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)

- (NSDictionary<NSString *, id> *)constantsToExport
{
  RCTPageControl *view = [RCTPageControl new];
  view.currentPage = 0;
  view.numberOfPages = 2;
  
  return @{
           @"ComponentHeight": @(view.intrinsicContentSize.height),
           };
}

@end
