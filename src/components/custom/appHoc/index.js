/**
 * @fileoverview HOC on top of screens to have
 * reuse common layout or track page analytics
 * @package
 */
import { Component } from 'react';
import { View } from 'react-native';
import { Loading } from '../uiKit';
import { globalStyles } from '../../../config';
import styles from './styles';

export default (data) => (WrappedComponent) => {
  class ScreenLayoutHoc extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: false,
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

    setLoading = (flag) => {
      this.setState({
        isLoading: flag
      });
    }

    render() {
      const { isLoading } = this.state;
      return (
        <View style={styles.wrap}>
          <WrappedComponent
            {...this.props}
            setLoading={this.setLoading}
          />
          <Loading isLoading={isLoading} />
        </View>
      );
    }
  }

  return ScreenLayoutHoc;
};
