import {Button, Stack} from "@mui/material";


const Genre = ({genre}) => {

    return (
        <Stack direction="row" spacing={2}>
            <Button href="#text-buttons">{genre.name}</Button>
        </Stack>
    );
};

export {Genre};