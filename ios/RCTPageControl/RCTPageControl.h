#import "UIKit/UIKit.h"
#import <React/RCTComponent.h>

@interface RCTPageControl : UIPageControl

@property (nonatomic, copy) RCTBubblingEventBlock onChange;

@end
