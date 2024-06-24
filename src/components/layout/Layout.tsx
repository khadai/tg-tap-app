import {FC} from "react";
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";
import backgroundImage from '../../assets/background.png'

interface Props {

}

const Layout: FC<Props> = () => {

    return (
        <Box
            pt={15}
            px={4}
            sx={{
                backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundColor: 'background.default',
                height: 'calc(100vh - 110px)',
            }}
        >
            <Outlet/>
        </Box>
    )
}

export default Layout;