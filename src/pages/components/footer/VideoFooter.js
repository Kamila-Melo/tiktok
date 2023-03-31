import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import vinil from '../../../assets/vinil.png'

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@Kamila Melo</h3>
                <p>Descrição do vídeo</p>
                <div className="videoFooter__music">
                    <MusicNoteIcon className="videoFooter__icon"/>
                    <div className="videoFooterMusic__text">
                        <p>Título da música</p>
                    </div>
                </div>
            </div>
            <img 
                className="videoFooter__record"
                alt="Imagem de um vinil girando"
                src={vinil}
            />
        </div>
    );
}

export default VideoFooter;
