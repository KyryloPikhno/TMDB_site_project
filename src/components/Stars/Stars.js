import {faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import {faStar as farStar} from "@fortawesome/free-regular-svg-icons";
import PrettyRating from "pretty-rating-react";


const icons = {
    star: {
        complete: faStar,
        half: faStarHalfAlt,
        empty: farStar,
    }
};

const colors = {
    star: ['#ffd446', '#ffd446', '#909799']
};

const Stars = ({vote_average}) => (
    <div>
        <PrettyRating value={vote_average} icons={icons.star} setColors={colors.star} max={10} array={colors.star}
                      colors={colors.star}/>
    </div>
);

export {Stars}