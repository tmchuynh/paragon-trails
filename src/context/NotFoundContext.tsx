import { NotFoundContextType } from "@/lib/types/types";
import { createContext, JSX, ReactNode, useContext, useState } from "react";

const NotFoundContext = createContext<NotFoundContextType | undefined>(
  undefined
);

/**
 * Provides a context for managing a "not found" state within the application.
 *
 * @param {Object} props - The properties object.
 * @param {ReactNode} props.children - The child components that will have access to the context.
 *
 * @returns {JSX.Element} The provider component that wraps its children with the NotFoundContext.
 *
 * @example
 * ```tsx
 * import { NotFoundProvider } from './NotFoundContext';
 *
 * function App() {
 *   return (
 *     <NotFoundProvider>
 *       <YourComponent />
 *     </NotFoundProvider>
 *   );
 * }
 * ```
 */
export const NotFoundProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [isNotFound, setIsNotFound] = useState(false);

  return (
    <NotFoundContext.Provider
      value={{ isNotFound, setNotFound: setIsNotFound }}
    >
      {children}
    </NotFoundContext.Provider>
  );
};

/**
 * Custom hook to access the NotFoundContext.
 *
 * This hook provides the current value of the NotFoundContext. It must be used
 * within a NotFoundProvider; otherwise, it will throw an error.
 *
 * @throws {Error} If the hook is used outside of a NotFoundProvider.
 * @returns {NotFoundContextType} The current context value.
 */
export const useNotFound = () => {
  const context = useContext(NotFoundContext);
  if (!context) {
    throw new Error("useNotFound must be used within a NotFoundProvider");
  }
  return context;
};
