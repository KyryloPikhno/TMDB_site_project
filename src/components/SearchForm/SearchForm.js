import {useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";
import {movieValidator} from "../../validators";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";
import css from './SearchForm.module.css'
import {useForm} from "react-hook-form";


const SearchForm = () => {

    const navigate = useNavigate()

    const{handleSubmit, register, reset, formState:{errors,isValid}} = useForm({
        resolver: joiResolver(movieValidator),
        mode:'all'
    })

    const dispatch = useDispatch()

    const submit = ({title}) =>{
        dispatch(movieActions.search({title}))
        navigate(`/movies_with_title=${title}`)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input className={css.input} type="text" placeholder={'Enter movie...'} {...register('title')}/>
            <button className={!isValid? css.noValidButton:'' ||css.button} disabled={!isValid}>Search</button>
            {errors.year && <span>{errors.year.message}</span>}
        </form>
    );
};

export {SearchForm};