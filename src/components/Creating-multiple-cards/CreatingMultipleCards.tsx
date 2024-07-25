import { ShortDescriptionAnime } from 'src/services/types/DataFromServerTypes.ts';
import { CardStyles } from 'src/components/Card/CardsTypes.ts';
import { Link } from 'react-router-dom';
import { Card } from 'src/components/Card/Card.tsx';
import { FC } from 'react';

interface CreatingMultipleCardsProps {
    arrayWithAnimeData: ShortDescriptionAnime[];
    cardStyles: CardStyles;
}

export const CreatingMultipleCards: FC<CreatingMultipleCardsProps> = ({
    arrayWithAnimeData,
    cardStyles,
}) => {
    return (
        <>
            {arrayWithAnimeData.map((title) => {
                return (
                    <Link
                        to={`/watch/${title.slug}`}
                        key={title.id}
                        onClick={() => window.scroll(0, 0)}
                    >
                        <Card styles={cardStyles} info={title} />
                    </Link>
                );
            })}
        </>
    );
};
