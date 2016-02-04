'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var ScrollableTabView = require('react-native-scrollable-tab-view');
var FacebookTabBar = require('./FacebookTabBar');
var DefaultTabBar = require('react-native-scrollable-tab-view/DefaultTabBar');
var { Icon } = require('react-native-icons');

var FacebookTabsExample = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView initialPage={1} renderTabBar={() => <FacebookTabBar />}>
          <ScrollView tabLabel="ion|ios-paper" style={styles.tabView}>
            <View style={styles.card}>
              <Text>News</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ion|person-stalker" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Friends</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ion|ios-chatboxes" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Messenger</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ion|ios-world" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Notifications</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ion|navicon-round" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Other nav</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>
      </View>
    );
  }
});

var SimpleExample = React.createClass({
  render() {
    return (
      <ScrollableTabView style={{marginTop: 20}}>
        <Text tabLabel='Tab #1'>My</Text>
        <Text tabLabel='Tab #2'>favorite</Text>
        <Text tabLabel='Tab #3'>project</Text>
      </ScrollableTabView>
    )
  }
});

// Adding the prop overlayTabs lets the content to show through a semitransparent tab bar.
// Note that if you build a custom tab bar component, its outer container must consume a
// style prop (e.g. <View style={[this.props.style, etc]}) to support this feature.
var OverlayTabsExample = React.createClass({
  render() {
    return (
      <ScrollableTabView
        style={styles.container}
        renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.5)' />}
        overlayTabs
        >
        <View tabLabel='Music' style={{flex:1, backgroundColor: '#CCFFFF'}}>
          <Icon name='ion|android-volume-up' color='#2222CC' size={300} style={styles.icon} />
        </View>
        <View tabLabel='Food' style={{flex:1, backgroundColor: '#CCBBDD'}}>
          <Icon name='ion|ios-nutrition' color='#22AACC' size={300} style={styles.icon} />
        </View>
        <View tabLabel='Drink' style={{flex:1, backgroundColor: '#EEFF33'}}>
          <Icon name='ion|ios-pint' color='#22FFCC' size={300} style={styles.icon} />
        </View>
      </ScrollableTabView>
    )
  }
});

module.exports = FacebookTabsExample;
// module.exports = SimpleExample;
// module.exports = OverlayTabsExample;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  }
});
