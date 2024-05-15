import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AppLayout from "./pages/AppLayout";
import Notes from "./pages/Notes";

import ProtectedRoute from "./utils/ProtectedRoute";
import NewNote from "./pages/NewNote";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/notes" replace />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/notes" element={<Notes />} />
            <Route path="/new" element={<NewNote />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" gutter={8} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
