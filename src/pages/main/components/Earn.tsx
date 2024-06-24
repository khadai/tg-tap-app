import {FC} from "react";
import {Stack, Typography} from "@mui/material";
import {NumericFormat} from "react-number-format";

interface Props {
    balance: number
}

const Earn: FC<Props> = ({balance}) => {

    return (<Stack alignItems='center' pt={1.5}>
        <Typography fontWeight={600} fontSize={13} color='primary.main'>Вы заработали</Typography>
        <Typography fontWeight={800} fontSize={30} color='common.white'>
            <NumericFormat
                value={balance}
                sx={{width: '100%'}}
                displayType='text'
                thousandSeparator=','
            ></NumericFormat>
        </Typography>
    </Stack>)
}

export default Earn;