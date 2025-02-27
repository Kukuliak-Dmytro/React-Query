import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { usePrefetch } from "./hooks/usePrefetch.ts";
import fetchPosts from "./services/postsFetches.ts";
// import fetchAlbums from './services/albumsFetches.ts'
import { GlobalModal } from "./components/common/Modal/Modal.tsx";
import { LoadingOverlay } from "./components/common/OverlaySpinner/OverlaySpinner.tsx";
function App() {
  const prefetchPosts = usePrefetch(fetchPosts);
  // const prefetchAlbums=usePrefetch(fetchAlbums)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <nav>
        <Link to="/React-Query/">Home</Link>
        {" | "}
        <Link
          to="/React-Query/posts"
          onMouseEnter={() => prefetchPosts(["posts"])}
        >
          Posts
        </Link>
        {/* {" |" } */}
        {/* <Link to='/React-Query/albums' onMouseEnter={(()=>prefetchAlbums(['albums']))}>Albums</Link> */}
      </nav>
      <Outlet></Outlet>
      <GlobalModal></GlobalModal>
      <LoadingOverlay></LoadingOverlay>
    </>
  );
}

export default App;
