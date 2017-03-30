import React from "react";

import Footer from "./Footer";
import Header from "./Header";

var TabsSwitcher = React.createClass({
    render: function() {
        var items = this.props.items.map(function(item) {
            return <a onClick={this.onClick.bind(this, item)}>{item.title}</a>;
        }.bind(this));
        return <div>{items}</div>;
    },
    onClick: function(item) {
        this.props.onTabClick(item);
    }
});



var TabsContent = React.createClass({
    render: function () {
        var items = this.props.items.map(function (item) {
            return <div>{item.content}</div>;
        });
        return <div>{items}</div>;
    }
});


export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "WelcomeXXXYYY",
        };
    }

    changeTitle(title) {
        this.setState({title});
    }

    handleTabClick(item) {
        // Do something with item, maybe set it as active.
    }

    render() {

        var styles = {};
        styles.borderColor = 'orange';
        styles.background = 'orange';


        var tabs = [
            {title: 'first', content: 'Content 1'},
            {title: 'second', content: 'Content 2'}
        ];


        return (
            <div style={styles}>something
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>

                <TabsSwitcher items={tabs} onTabClick={this.handleTabClick}/>
                <TabsContent items={tabs}/>

                <Footer />
            </div>
        );
    }
}
