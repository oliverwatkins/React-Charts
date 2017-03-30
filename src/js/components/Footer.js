import React from "react";


export default class Footer extends React.Component {
    render() {

        var styles = {};
        styles.background = 'blue';

        return (
            <footer style={styles}>this is a footer</footer>
        );
    }
}
