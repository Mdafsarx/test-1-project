import Link from 'next/link';
import style from './card.module.css'
type cardType = {
    id: number;
    title: string;
}

export default function Card({ id, title }: cardType) {
    return (
        <Link href={`/post/${id}`} className={`${style.cardContainer} ${style.cardText}`}>
            <p>{title}</p>
        </Link >
    )
}
