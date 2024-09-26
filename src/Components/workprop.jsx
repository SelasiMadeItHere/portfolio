import React from 'react'
import { Button, Card, Modal} from '@mui/material'


const Workprop = ({ image, name, Stack, image1, image2, image3, image4, image5,image6 }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div>
            <center>
                <img src={image} alt="project_picture" className=' w-[50%] h-[80%] text-center' />
                <h3><strong>Name: </strong>{name}</h3>
                <h3><strong>Stack: </strong>{Stack}</h3>
                
                <p> </p>
                <Button variant='contained' onClick={handleOpen}>VIEW</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Card className=' bg-white-700 m-[15%] h-auto p-6 '>
                      <p className=' text-xl font-bold text-purple-500'> Preview of Project Pages</p><br/>
                        <div className=' flex inline content-center justify-center'>
                            <img src={image1} alt='carousel' className=' h-54 w-36'/>
                            <img src={image2} alt='carousel' className=' h-54 w-36'/>
                            <img src={image3} alt='carousel' className=' h-54 w-36'/>
                            <img src={image4} alt='carousel' className=' h-54 w-36'/>
                            <img src={image5} alt='carousel' className=' h-54 w-36'/>
                        </div>
                    </Card>
                </Modal>
            </center>

        </div>
    )
}

export default Workprop