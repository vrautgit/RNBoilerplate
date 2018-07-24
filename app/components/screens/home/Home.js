import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import mainStyles from '../../../assets/styles/MainStyles';
import { styles } from './styles';
import { setNavigation } from '../../../redux/actions/NavAction';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        var data = { navigationType: 'rootNavigation', navigationRoute: this.props.navigation }
        this.props.setNavigation(data);
    }

    _login = () => {
        this.props.navProps.rootNavigation.navigate('TabNav')
    }

    render(){
        return (
            <View style={mainStyles.rootView}>
                <View style={styles.btnWrap}>
                    <Button large success onPress={()=>{ this._login() }}  style={{alignSelf:'center'}}>
                        <Text>Sign In</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    navProps: state.navProps
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setNavigation: setNavigation
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);