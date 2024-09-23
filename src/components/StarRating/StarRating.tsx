import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

interface StarRatingProps {
    rating: number;
}

const StarRating = ({rating = 10}: StarRatingProps) => {
    const getStars = () => {
         const fullStars = Math.floor(rating / 2); // 6.2 => 3
         const hasHalfStar = rating % 2 !== 0; // true
         const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // 5 - 3 - 1 = 1
         // 3 fullstar icon, 1 halfstar icon, 1 emptystar icon. write with symbols
         // return '★★★½☆'

         return (
            <>
                {Array(fullStars).fill(<BsStarFill className="text-yellow-500" />)}
                {hasHalfStar && <BsStarHalf className="text-yellow-500" />}
                {Array(emptyStars).fill(<BsStar className="text-yellow-500" />)}
            </>
         )

    }

    return (
        <div className='flex' >
            {getStars()}
        </div>
    )
}

export default StarRating;