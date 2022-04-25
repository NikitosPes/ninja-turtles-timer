import { useState } from "react"

interface CharacterDescriptionBlockProps {
    character: {
        name: string,
        description: string
    },
    characterImg: string,
}

const CharacterDescriptionBlock: React.FC<CharacterDescriptionBlockProps> = ({ ...props }) => {

    const [active, setActive] = useState<boolean>(false);

    return(
        <div className='secondary-content__description-block'>
            <a className={`description-block__title ${props.character.name.toLocaleLowerCase()}`} onClick={() => setActive(!active)}>{props.character.name}</a>
            <div className={`${active ? 'description-block__content active' : 'description-block__content'}`}>
                <img className={`${active ? 'contnet__img active' : 'contnet__img'}`} src={props.characterImg} alt={`${props.character.name}Img`} />
                <div className={`${active ? 'content__description active': 'content__description'}`}>{props.character.description}</div>
            </div>
        </div>
    )
}

export default CharacterDescriptionBlock;