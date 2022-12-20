import {useState} from "react";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import {urls} from "../../configs";
import css from './KeepMountedModal.module.css'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 34,
    p: 4,
};

const KeepMountedModal = ({poster_path, title}) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>
                {poster_path && <img className={css.poster} src={`${urls.image_path}${poster_path}`} alt={title}/>}
            </Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <div className={css.box}>
                        {poster_path &&
                            <img className={css.posterModal} src={`${urls.image_path}${poster_path}`} alt={title}/>}
                    </div>
                </Box>
            </Modal>
        </div>
    );
};


export {KeepMountedModal}