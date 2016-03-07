#import "UIKit/UIKit.h"
#import "RCTComponent.h"

@interface RCTPageControl : UIPageControl

@property (nonatomic, copy) RCTBubblingEventBlock onChange;

@end
