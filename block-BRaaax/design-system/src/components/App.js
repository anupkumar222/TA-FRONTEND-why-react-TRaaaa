import '../styles/index.css';
import Button from "./Button";
import { buttonSizes, buttonTypes } from '../buttonInfo';
function App() {
    return (
        <div className='app' >
            <Button label="Click Me" onClickHandler={() => alert('you clicked me')}/>
            <Button label="Click Me" type={buttonTypes.SECONDARY} size={buttonSizes.LARGE}/>
            <Button label="Click Me" type={buttonTypes.TERTIARY} size={buttonSizes.SMALL}/>
            <Button label="Click Me" disabled/>
            </div>
    )
}

export default App;