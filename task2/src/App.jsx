import UsersList from "./components/UsersList.jsx";
import TodoApp from "./components/TodoApp.jsx";

export default function App() {
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <h1 className="text-center mb-5">Task 2</h1>

        {/* Users List */}
        <div className="mb-5">
          <UsersList />
        </div>

        <hr className="my-5" />

        {/* To-Do App */}
        <TodoApp />
      </div>
    </div>
  );
}
