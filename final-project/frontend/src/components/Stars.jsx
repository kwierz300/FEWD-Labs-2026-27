import Star from "./star";
import { useLocalStorage } from "./useLocalStorage";

export default function StarRating({ productId, totalStars = 5 }) {
    const storageKey = "cafe-rating:" + productId;
    const [selectedStars, setSelectedStars] = useLocalStorage(storageKey, 3);
    const rating = Number.isInteger(selectedStars) && selectedStars >= 1 &&
        selectedStars <= totalStars ? selectedStars : Math.min(3, totalStars);

    return (
        <div className="mt-2" role="group" aria-label="My rating">
            <p className="small mb-1">My rating</p>
            <div className="d-flex flex-wrap">
                {Array.from({ length: totalStars }, (_, index) => (
                    <Star key={index} selected={rating > index}
                        active={rating === index + 1}
                        label={"Rate " + (index + 1) + " out of " + totalStars}
                        onSelect={() => setSelectedStars(index + 1)} />
                ))}
            </div>
            <p className="small mb-0" aria-live="polite">{rating} out of {totalStars}</p>
        </div>
    );
}
