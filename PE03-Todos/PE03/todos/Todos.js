import {View, StyleSheet} from 'react-native';

const Todo = ({ todo }) => (
    <View style={StyleSheet.todoContainer}>
        <Text style={StyleSheet.todoText}>
            {todo.title}
        </Text>
    </View>
)

export default Todo