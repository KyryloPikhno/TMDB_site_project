
import {useSearchParams} from "react-router-dom";



const Sorter = () => {
    const [sort, setSort] = useSearchParams();

    console.log(sort.get('sort_by'));



    // const {voteAverage, firstAirDate, popularity} = state;

    return (
       <div>
           <button>voteAverage</button>
           <button>firstAirDate</button>
           <button>popularity</button>
       </div>
    );

};

export {Sorter};