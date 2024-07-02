import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-4xl font-bold my-10 text-purple-600">
        MY TODOS
      </h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
