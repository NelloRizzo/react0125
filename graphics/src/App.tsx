import { Provider } from "react-redux"
import StatusBarComponent from "./components/StatusBarComponent/StatusBarComponent"
import ToolbarComponent from "./components/ToolbarComponent/ToolbarComponent"
import WhiteboardComponent from "./components/WhiteboardComponent/WhiteboardComponent"
import { store } from "./store/store-config"
function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <h1>My Whiteboard</h1>
        <ToolbarComponent />
        <WhiteboardComponent />
        <StatusBarComponent />
      </div>
    </Provider>
  )
}

export default App
