
import ComponentwithProps from './props/ComponentwithProps';

const MyComponent = () => {
    return (
        <>
    <h1> Hello World! </h1>
    <ComponentwithProps
    header="This is my header"
    content="Content for webpage"
    number={45}
    nonexistent="non-existent"/>
    </>
    );
}

export default MyComponent;