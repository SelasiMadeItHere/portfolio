import React from 'react';
import { Button, Card, Modal } from '@mui/material';

const Workprop = ({ image, name, Stack, images }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <center>
                <img src={image} alt="project_picture" className='w-[50%] h-[80%] text-center' />
                <h3><strong>Name: </strong>{name}</h3>
                <h3><strong>Stack: </strong>{Stack}</h3>
                <Button variant='contained' onClick={handleOpen}>VIEW</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Card className='bg-white-700 m-[15%] h-auto p-6'>
                        <p className='text-xl font-bold text-purple-500'>Preview of Project Pages</p><br />
                        <div className='flex inline content-center justify-center'>
                            {images.map((image, index) => (
                                <img key={index} src={image} alt={`Preview ${index + 1}`} />
                            ))}
                        </div>
                    </Card>
                </Modal>
            </center>
        </div>
    );
}


console.log(images); // Add this line to debug 
export default Workprop;
