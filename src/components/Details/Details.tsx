import StarRating from "../StarRating/StarRating";

const Deatils = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <h3 className="font-bold text-xl mb-2">Deadpool & Wolverine (2024)</h3>
      <div className="px-6 py-4" >
            <StarRating rating={6.2} />
      </div>
      <p className="text-gray-700 text-base" >
        A listless Wade Wilson toils away in civilian life with his days as the
        morally flexible mercenary, Deadpool, behind him. But when his homeworld
        faces an existential threat, Wade must reluctantly suit-up again with an
        even more reluctant Wolverine.
      </p>
    </div>
  );
};

export default Deatils;
