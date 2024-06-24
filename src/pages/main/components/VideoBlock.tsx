import {FC} from "react";
import {Box, ButtonBase, Link} from "@mui/material";
import './videoBlock.scss';

interface Props {
    imageUrl: string;
    youtubeUrl: string;
}

const VideoBlock: FC<Props> = ({imageUrl, youtubeUrl}) => {
    return (
        <ButtonBase component={Link} href={youtubeUrl} target='_blank'>
            <Box bgcolor='#182724' color='primary.main' p={'4px'} borderRadius={2} height={'85px'}>
                <div className="image-container">
                    <img src={imageUrl} alt="Thumbnail" style={{width: '100%'}}/>
                </div>
            </Box>
        </ButtonBase>
    )
}

export default VideoBlock;