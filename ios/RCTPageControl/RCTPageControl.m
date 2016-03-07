#import "RCTPageControl.h"

@implementation RCTPageControl

- (instancetype)initWithFrame:(CGRect)frame
{
  if ((self = [super initWithFrame:frame])) {
    [self addTarget:self action:@selector(didChange)
          forControlEvents:UIControlEventValueChanged];
  }
  return self;
}

- (void)didChange
{
  if (_onChange) {
    _onChange(@{
                @"currentPage": @(self.currentPage),
                @"numberOfPages": @(self.numberOfPages)
                });
  }
}

@end
