import React, { Component, Fragment } from "react";
import {StyleSheet, Text} from "react-native";
import ProgressCircle from 'react-native-progress/Circle';

export default class AnimatedPie extends Component {
    interval = null;
    state = {
        progress: 0
    };
    componentDidMount = () => {
        const finalProgress = this.props.percentage / 100;
        const step = 0.02;
        this.interval = setInterval(() => {
            if (this.state.progress + step < finalProgress) {
                this.setState(state => ({
                    progress: state.progress + step
                }));
            } else {
                this.setState(state => ({
                    progress: finalProgress
                }));
                clearInterval(this.interval);
            }
        }, 20);
    }
    componentWillUnmount = () => {
        clearInterval(this.interval);
    }
    
    render() {
        const finalProgress = this.props.percentage / 100;
        const subtitle = this.props.subtitle;
        const {progress} = this.state;
        return (
            <Fragment>
                <ProgressCircle
                    progress={progress}
                    animated size={300}
                    showsText
                    formatText={() => (progress * 100).toFixed(0) + '%'}
                />
                <Text style={styles.subtitle}>
                    {progress >= finalProgress ? subtitle : ''}
                </Text>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    subtitle: {
        margin: 20,
        fontSize: 30,
        textAlign: 'center'
    }
});