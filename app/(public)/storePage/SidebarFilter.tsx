export default function SidebarFilter() {
  return (
    <aside className="w-full md:w-1/4">
      <h2 className="text-xl font-semibold mb-4">Filter by</h2>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Category</h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>
            <label>
              <input type="checkbox" className="mr-2" />
              Shirts
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" className="mr-2" />
              Hoodies
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" className="mr-2" />
              Embroidered
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" className="mr-2" />
              Limited
            </label>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Price</h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>
            <label>
              <input type="radio" name="price" className="mr-2" />
              Under $20
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="price" className="mr-2" />
              $20–$50
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="price" className="mr-2" />
              Above $50
            </label>
          </li>
        </ul>
      </div>
    </aside>
  );
}
