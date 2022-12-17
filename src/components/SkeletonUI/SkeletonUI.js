import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const SkeletonUI=()=> {
    return (
        <Stack spacing={2}>
            <div>

            <Skeleton variant="rectangular" width={200} height={300} />
            </div>
            {/*<Skeleton variant="text" sx={{ fontSize: '1rem' }} />*/}

        </Stack>
    );
}

export {SkeletonUI}