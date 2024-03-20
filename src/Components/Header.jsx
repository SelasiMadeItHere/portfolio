import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='App-header'>
            <div className=' drop-shadow-md  p-2'>
                <div className=' grid grid-cols-3'>
                    <div className=' grid-cols text-lg text-center text-purple-800 py-2 hover:italic'>PRECIOUS AGBESI SELASI</div>
                    <div className=' grid-cols text-4xl text-center text-purple-800 my-2 font-bold'>PORTFOLIO</div>
                    <div className=' grid-cols text-center my-2' >
                        <Button
                            onClick={handleClick}
                            className=' text-lg'
                            variant='text'
                            style={{ color: '#7510F7',}}
                        >
                            Dashboard
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header