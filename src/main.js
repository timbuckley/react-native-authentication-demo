const React = require('react-native')
const {
  View,
  Text,
  StyleSheet
} = React

const Parse = require('parse/react-native')
// const ParseReact = require('parse-react/react-native')
const Signin = require('./components/authentication/signin')


module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize(
      "L58XR3cPAhAVJwfyzksHu19IMVGg1qnTM3KA9MyA",
      "ro2QLrBdlnKrJoAKwRHCzmaaFkMw3N52ps3UFzEj"
    )
  },
  render: function() {
    return(
      <View style={styles.container}>
          <Signin />
      </View>
    )
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
