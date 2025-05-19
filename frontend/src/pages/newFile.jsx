return (
  <div className="pt-10 border-t relative">
    {/* Filter Sidebar (Fixed on sm+ screens) */}
    <div className="sm:fixed sm:top-20 sm:left-0 sm:w-64 sm:h-[calc(100vh-80px)] sm:overflow-y-auto p-4 bg-gray-100 border border-gray-400 rounded-lg z-10">
      <p
        onClick={() => setShowFilter(!showFilter)}
        className="my-2 text-xl font-bold flex items-center cursor-pointer gap-2"
      >
        FILTERS
        <img
          className={`h-3 sm:hidden transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`}
          src={assets.dropdown_icon}
          alt="" />
      </p>

      {/* Category Filter */}
      <div className={`mt-4 bg-white border border-gray-400 rounded-lg p-4 ${showFilter ? '' : 'hidden'} sm:block`}>
        <p className="mb-3 text-sm font-bold text-gray-900">CATEGORIES</p>
        <div className="flex flex-col gap-2 text-sm font-medium text-gray-700">
          {['Men', 'Women', 'Kids'].map((cat) => (
            <label key={cat} className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" value={cat} onChange={toggleCategory} /> {cat}
            </label>
          ))}
        </div>
      </div>

      {/* SubCategory Filter */}
      <div className={`mt-5 bg-white border border-gray-400 rounded-lg p-4 ${showFilter ? '' : 'hidden'} sm:block`}>
        <p className="mb-3 text-sm font-bold text-gray-900">TYPE</p>
        <div className="flex flex-col gap-2 text-sm font-medium text-gray-700">
          {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" value={type} onChange={toggleSubCategory} /> {type}
            </label>
          ))}
        </div>
      </div>
    </div>

    {/* Products Section */}
    <div className="sm:ml-72 px-2">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 sm:gap-0 text-base sm:text-2xl">
        <Title text1="ALL" text2="COLLECTIONS" />
        <select
          onChange={(e) => setSortType(e.target.value)}
          className="border border-gray-400 text-sm px-2 py-1 font-bold rounded-md"
        >
          <option value="relavent">Sort by: Relevant</option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {filterProducts.map((item, index) => (
          <ProductItem
            key={index}
            name={item.name}
            id={item._id}
            price={item.price}
            image={item.image} />
        ))}
      </div>
    </div>
  </div>
);
