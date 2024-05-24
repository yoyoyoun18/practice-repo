import "./App.css";
import Detail from "./Detail";
import Header from "./Header";
import Login from "./Login";
import Map from "./Map";
import MyInfo from "./MyInfo";
import Register from "./Register";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResult";

function App() {
  return (
    <div className="flex flex-row h-screen">
      <div
        className="p-4 overflow-y-auto bg-gray-100 w-96 relative z-50"
        style={{ flexShrink: 0 }}
      >
        <Header />
        <SearchBar />
        <MyInfo />
        <SearchResults />
      </div>
      <Detail />
      <div className="flex-grow h-full">
        <Map />
      </div>
    </div>
  );
}

export default App;
