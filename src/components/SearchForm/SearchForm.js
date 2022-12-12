import {useNavigate, useParams} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

import {movieValidator} from "../../validators";
import {movieActions} from "../../redux/slices";
import css from './SearchForm.module.css'


const SearchForm = () => {
    const {page} = useParams()

    const navigate = useNavigate()

    const {handleSubmit, register, reset, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(movieValidator),
        mode: 'all'
    })

    const dispatch = useDispatch()

    const submit = ({title}) => {
        dispatch(movieActions.search({page, title}))
        navigate(`/movies_with_title=${title}/page=${page}`)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input className={css.input} type="text" placeholder={'Enter movie...'} {...register('title')}/>
            <button className={!isValid ? css.noValidButton : '' || css.button} disabled={!isValid}>Search</button>
            {errors.year && <span>{errors.year.message}</span>}
        </form>
    );
};

export {SearchForm};