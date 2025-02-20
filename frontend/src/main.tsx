import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router'
import './styles/index.css';
import { HelmetProvider } from 'react-helmet-async';
import  AuthProvider from './context/AuthProvider';
import { QueryClientProvider, QueryClient} 
from '@tanstack/react-query';
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
    </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
