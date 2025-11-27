export default function FiltersBar({
  sort,
  setSort,
  minPrice,
  maxPrice,
  setPriceRange,
  rating,
  setRating
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
      <div className="flex gap-2 items-center">
        <label>Min Price:</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setPriceRange([+e.target.value, maxPrice])}
          className="border p-1 rounded w-24"
        />
      </div>

      <div className="flex gap-2 items-center">
        <label>Max Price:</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setPriceRange([minPrice, +e.target.value])}
          className="border p-1 rounded w-24"
        />
      </div>

      <div className="flex gap-2 items-center">
        <label>Rating:</label>
        <select
          value={rating}
          onChange={(e) => setRating(+e.target.value)}
          className="border p-1 rounded"
        >
          <option value={0}>All</option>
          <option value={3}>3★ & up</option>
          <option value={4}>4★ & up</option>
          <option value={4.5}>4.5★ & up</option>
        </select>
      </div>

      <div className="flex gap-2 items-center">
        <label>Sort:</label>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-1 rounded"
        >
          <option value="">Default</option>
          <option value="price_asc">Price: Low → High</option>
          <option value="price_desc">Price: High → Low</option>
          <option value="rating_desc">Top Rated</option>
          <option value="name_asc">Name: A–Z</option>
        </select>
      </div>
    </div>
  );
}
