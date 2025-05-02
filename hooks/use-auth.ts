"use client"

// This is just a re-export of the context from auth-provider.tsx
// The actual implementation is in that file
export function useAuth() {
  // This will be properly defined when the AuthProvider is used
  // We're just creating a placeholder here for the import
  return {
    user: {id: '320592309', name: 'Test', accountType: "paid", email: 'test@mail.ru', avatar: null},
    isAuthenticated: true,
    login: async () => {},
    register: async () => {},
    logout: () => {},
  }
}
