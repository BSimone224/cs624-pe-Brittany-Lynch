const Todo = ({ todo }) => (
    <View style={StyleSheet.todoContainer}>
        <Text style={StyleSheet.todoText}>
            {todo.title}
        </Text>
    </View>
)

export default Todo