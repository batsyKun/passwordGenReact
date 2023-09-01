// import PropTypes from 'prop-types';

const CharacterRange = ({rangeVal, setRangeVal}) => {
    // const [rangeval, setRangeval] = useState(10);

    return ( 
        <>
            <input id="characterText" value={rangeVal}onChange={(event) => {
                                    const newValue = event.target.value.trim() === '' ? '' : parseInt(event.target.value);
                                    setRangeVal(newValue);
                                    }}></input>
            <input type="range" id="charactersRange" name="characters" min="0" max="20" onChange={(event) => setRangeVal(event.target.value)}></input>
            {/* <span><h3 style={{ padding: '10px' }}>{rangeval}</h3></span> */}
        </>
    );
}
// CharacterRange.propTypes = {
//     rangeVal: PropTypes.number.isRequired,
//     setRangeVal: PropTypes.func.isRequired,
// };

export default CharacterRange;