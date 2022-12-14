import { useSearchParams} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";
import { useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {movieValidator} from "../../validators";
import css from './SearchForm.module.css'


const SearchForm = () => {
    const [query,setQuery] = useSearchParams({page:'3'})

    const {currentTheme} = useSelector(state => state.themeReducer);

    const {handleSubmit, register, reset, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(movieValidator),
        mode: 'all'
    })

    const submit = ({query}) => {
        if (query) {
            setQuery({query: query, page: '1'})
        }
        reset()
    }

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