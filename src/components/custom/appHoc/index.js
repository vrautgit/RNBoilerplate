/**
 * @fileoverview HOC on top of screens to have
 * reuse common layout or track page analytics
 * @package
 */
import { Component } from 'react';
import { View } from 'react-native';
import { globalStyles } from '../../../config';

export default (data) => (WrappedComponent) => {
  class ScreenLayoutHoc extends Component {
    constructor(props) {
      super(props);

      this.state = {
        pageLoading: true
      };

      const oldRender = Text.render;
      // eslint-disable-next-line func-names
      Text.render = function (...args) {
        const origin = oldRender.call(this, ...args);
        return React.cloneElement(origin, {
          style: [globalStyles.defaultText, origin.props.style]
        });
      };
    }

    componentDidMount = () => {
      this.setState({
        pageLoading: false
      });
    }

    render() {
      return (
        <View>
          <WrappedComponent
            {...this.props}
          />
        </View>
      );
    }
  }

  return ScreenLayoutHoc;
};
