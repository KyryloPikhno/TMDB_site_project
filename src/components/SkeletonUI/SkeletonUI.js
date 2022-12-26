import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import css from './SkeletonUI.module.css'


const SkeletonUI = () => {
    return (
        <Stack spacing={2} className={css.wrapper}>
            <div className={css.container}>
                <Skeleton variant="rectangular" width={214} height={373}/>
                <Skeleton variant="rectangular" width={214} height={373}/>
                <Skeleton variant="rectangular" width={214} height={373}/>
                <Skeleton variant="rectangular" width={214} height={373}/>
                <Skeleton variant="rectangular" width={214} height={373}/>
                <Skeleton variant="rectangular" width={214} height={367}/>
                <Skeleton variant="rectangular" width={214} height={367}/>
                <Skeleton variant="rectangular" width={214} height={367}/>
                <Skeleton variant="rectangular" width={214} height={367}/>
                <Skeleton variant="rectangular" width={214} height={367}/>
                <Skeleton variant="rectangular" width={214} height={367}/>
                <Skeleton variant="rectangular" width={214} height={367}/>
                <Skeleton variant="rectangular" width={214} height={367}/>
                <Skeleton variant="rectangular" width={214} height={367}/>
                <Skeleton variant="rectangular" width={214} height={367}/>
                <Skeleton variant="rectangular" width={214} height={367}/>
                <Skeleton variant="rectangular" width={214} height={367}/>
                <Skeleton variant="rectangular" width={214} height={367}/>
                <Skeleton variant="rectangular" width={214} height={367}/>
                <Skeleton variant="rectangular" width={214} height={367}/>
            </div>
            {/*<Skeleton variant="text" sx={{ fontSize: '1rem' }} />*/}
        </Stack>
    );
};


export {SkeletonUI}