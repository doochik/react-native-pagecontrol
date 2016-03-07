'use strict';
/**
 * @providesModule PageControlIOS
 */

const React = require('react-native');
const {
    Dimensions,
    NativeModules,
    requireNativeComponent,
    PropTypes,
    StyleSheet
} = React;

class PageControlIOS extends React.Component {

    constructor(props) {
        super(props);

        this._onChange = this._onChange.bind(this);
    }

    render() {
        return (
            <RCTPageControl
                {...this.props}
                style={[styles.PageControlIOS, this.props.style]}
                onChange={this._onChange}
            />
        );
    }

    _onChange(event) {
        this.props.onChange && this.props.onChange(event);
        this.props.onValueChange && this.props.onValueChange(event.nativeEvent.currentPage);
    }
}
PageControlIOS.propTypes = {
    ...React.View.propTypes,

    /**
     * The current page, shown by the receiver as a white dot.
     */
    currentPage: PropTypes.number,

    /**
     * The number of pages the receiver shows (as dots).
     */
    numberOfPages: PropTypes.number,

    /**
     * A Boolean value that controls whether the page control is hidden when there is only one page.
     */
    hidesForSinglePage: PropTypes.bool,

    /**
     * The tint color to be used for the page indicator.
     */
    pageIndicatorTintColor: PropTypes.string,

    /**
     * The tint color to be used for the current page indicator.
     */
    currentPageIndicatorTintColor: PropTypes.string,

    /**
     * Callback that is called when the user taps a PageControl;
     * passes the event as an argument
     */
    onChange: PropTypes.func,

    /**
     * Callback that is called when the user taps a PageControl;
     * passes the currentPage value as an argument
     */
    onValueChange: PropTypes.func
};

const styles = StyleSheet.create({
    PageControlIOS: {
        height: NativeModules.SegmentedControlManager.ComponentHeight,
        width: Dimensions.get('window').width
    }
});

const RCTPageControl = requireNativeComponent('RCTPageControl', PageControlIOS);

module.exports = PageControlIOS;
