import './style.scss';

const BackgroundOverlay = (props) => {
    const {handleFocusInput} = props;

    return (
        <>
            <div className='bg-overlay' onClick={handleFocusInput}></div>
        </>
    );
}
 
export default BackgroundOverlay;