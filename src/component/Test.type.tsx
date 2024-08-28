export interface TestType{
    //This prop is for person
    message: string;
    //This prop is boolean to set on button clicked
    isClicked:boolean;
    //This function is to click on button
    handleButtonClick:()=>void;
}

const styles: {
    subContainer: string;
    button: string;
    buttonClicked: string;
    input: string;
    inputGroup: string;
} = require('./Test.module.css');

export default styles;