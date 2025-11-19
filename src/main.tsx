import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Toaster } from 'sonner';
import { ThemeProvider } from './components/theme-provider.tsx';
import { Provider } from 'react-redux';
import { store } from './store.ts';
import { AuthProvider } from './utils/auth/AuthProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <ThemeProvider>
          <App />
          <Toaster position="top-center" closeButton />
        </ThemeProvider>
      </Provider>
    </AuthProvider>
  </StrictMode>
);
