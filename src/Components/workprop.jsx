// import React from 'react';
// import { Button, Card, Modal } from '@mui/material';
// import projectData from '../constant';

// const Workprop = ({ image, Stack, images }) => {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//     const projects = projectData();
//     const project1 = projects.Marketplace;
//     const project2 = projects.Smartschool;
//     const project3 = projects.Cynthias;

//     return (
//         <div>
//             <center>
//                 {Object.entries(projects).map(([projectName, images]) => (
//                     <div key={projectName}>

//                         <img src={image} alt="project_picture" className='w-[50%] h-[80%] text-center' />
//                         <h3><strong>Name: </strong>{projectName}</h3>
//                         <h3><strong>Stack: </strong>{Stack}</h3>
//                         <Button variant='contained' onClick={handleOpen}>VIEW</Button>
//                         <Modal
//                             open={open}
//                             onClose={handleClose}
//                             aria-labelledby="modal-modal-title"
//                             aria-describedby="modal-modal-description"
//                         >
//                             <Card className='bg-white-700 m-[15%] h-auto p-6'>
//                                 <p className='text-xl font-bold text-purple-500'>Preview of Project Pages</p><br />
//                                 <div className='flex inline content-center justify-center'>
//                                     {images.map((image, index) => (
//                                         <img
//                                             key={index}
//                                             src={image}
//                                             alt={`Screenshot of ${projectName} ${index + 1}`}
//                                             className="rounded-lg shadow-lg"
//                                         />
//                                     ))}
//                                 </div>
//                             </Card>
//                         </Modal>
//                     </div>

//                 ))}
//             </center>
//         </div>
//     );
// }

// // Add this line to debug 
// export default Workprop;



import React from 'react';
import projectData from '../constant';
import { Button, Modal, Card } from '@mui/material';

const Workprop = ({ image, Stack }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const projects = projectData();

    return (
        <div>
            <center>
                {Object.entries(projects).map(([projectName, images]) => (
                    <div key={projectName}>
                        <img src={image} alt="project_picture" className='w-[50%] h-[80%] text-center' />
                        <h3><strong>Name: </strong>{projectName}</h3>
                        <h3><strong>Stack: </strong>{Stack}</h3>
                        <Button variant='contained' onClick={handleOpen}>VIEW</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Card className='bg-red-700 m-[10%] h-auto w-[80%] p-6'>
                                <p className='text-xl font-bold text-purple-500'>Preview of Project Pages</p><br />
                                <div className='flex inline content-center justify-center overflow-auto gap-12 flex-wrap'>
                                    {images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Preview of ${projectName} ${index + 1}`}
                                            className="rounded-lg shadow-lg h-[230px] w-[300px]"
                                        />
                                    ))}
                                </div>
                            </Card>
                        </Modal>
                    </div>
                ))}
            </center>
        </div>
    );
};

export default Workprop;
