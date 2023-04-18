export type Todo = {
  todo_id: string;
  user_id: string;
  task?: string | null;
  is_complete?: boolean | null;
  category?: string | null;
};
