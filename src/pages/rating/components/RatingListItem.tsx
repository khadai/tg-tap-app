import {FC} from "react";
import {LeaderBoardUser} from "../../../interfaces/interfaces.ts";
import {containerStyle} from "../../../styles/styles.ts";
import {Box, Typography} from "@mui/material";

interface Props {
    rating: LeaderBoardUser
}

const RatingListItem: FC<Props> = ({rating}) => {
    const {position, username, refAmount} = rating

    return (
        <Box sx={{...containerStyle, borderRadius: '0', borderBottom:'1px solid #FFFFFF33', display:'flex', py:"14px", px:'22px', width:'inherit', gap:'14px'}}>
            <Typography  fontSize={12} fontWeight={600} color={'text.secondary'}>{position}</Typography>
            <Typography fontSize={12} fontWeight={600} color={'common.white'}>{username}</Typography>
            <Typography  fontSize={12} fontWeight={600} color={'primary.main'} textAlign={'end'} flex={1}>{refAmount} реф</Typography>
        </Box>
    )
}

export default RatingListItem;