import { Camera } from "phosphor-react";
import './style.css';

export function TextBody() {
        return (
                <>
                        <div className="cont">
                                <h1 className="text">PROJETO CRIADO NA "NLW Return" (Rocketseat)</h1>
                                <h3 className="text">Clique no botão roxo no quanto esquerdo da tela e deixe seu feedback.</h3>
                                <p className="text2">Você também pode tirar um print screen da tela e me enviar, clicando no botão da câmera que irá aparecer...</p>
                                <Camera className="w-full h-16 items-center " />
                        </div>
                </>
        )
}