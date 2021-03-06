'use strict';

/**
 * @providesModule PageControlIOS
 */

import React from 'react';
import {
    Dimensions,
    NativeModules,
    requireNativeComponent,
    StyleSheet,
    ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

class PageControlIOS extends React.PureComponent {

    constructor(props) {
        super(props);

        this._onChange = this._onChange.bind(this);
    }

    render() {
        return (
            <RCTPageControl
                {...this.props}
                onChange={this._onChange}
                style={[styles.PageControlIOS, this.props.style]}
            />
        );
    }

    /**
     * Handle PageControl change event
     * @param {Event} event
     * @private
     */
    _onChange(event) {
        this.props.onChange && this.props.onChange(event);
        this.props.onValueChange && this.props.onValueChange(event.nativeEvent.currentPage);
    }
}

PageControlIOS.propTypes = {
    ...ViewPropTypes,

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
    onValueChange: PropTypes.func,
};

const styles = StyleSheet.create({
    PageControlIOS: {
        height: NativeModules.PageControlManager.ComponentHeight,
        width: Dimensions.get('window').width,
    },
});

const RCTPageControl = requireNativeComponent('RCTPageControl', PageControlIOS);

export default PageControlIOS;
