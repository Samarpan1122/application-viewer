import '../styles/globals.css';

// Function to render the main application component
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// Export the MyApp component as the default export
export default MyApp;