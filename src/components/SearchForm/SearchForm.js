import {createSearchParams, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import { useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";

import {movieValidator} from "../../validators";
import css from './SearchForm.module.css'


const SearchForm = () => {
    const {currentTheme} = useSelector(state => state.themeReducer);

    const {handleSubmit, register, reset, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(movieValidator),
        mode: 'all'
    })

    const navigate = useNavigate()

    const location = useLocation()

    const currentPath = location.pathname.split('/')[1]

    const submit = ({query}) => {
        navigate({
            pathname: currentPath,
            search: createSearchParams({
                page: '1',
                query
            }).toString()
        });
        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input className={currentTheme === 'dark' ? css.input : css.lightInput} type="text"
                   placeholder={'Enter movie...'} {...register('query')}/>
            <button
                className={!isValid ? css.noValidButton : '' || currentTheme === 'dark' ? css.button : css.lightButton}
                disabled={!isValid}>Search
            </button>
            {errors.year && <span>{errors.year.message}</span>}
        </form>
    );
};


export {SearchForm};