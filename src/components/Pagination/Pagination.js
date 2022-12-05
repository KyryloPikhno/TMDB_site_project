import {Stack} from "@mui/material";

const Pagination = () => {


    return (
        <Stack spacing={2}>
            <Pagination count={10} shape="rounded" />
            <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
    );
};

export {Pagination};