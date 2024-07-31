function DealForm() {
  return (
    <form className="w-full max-w-xl">
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="name">Name</label>
        <input
          className="w-full p-2 rounded-md text-gray-900"
          type="text"
          id="name"
          name="name"
          required
          minLength={5}
          title="Name must be at least 5 characters"
        />
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="name">Link</label>
        <input
          className="w-full p-2 rounded-md text-gray-900"
          type="text"
          id="link"
          name="link"
          required
        />
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="name">Coupon code</label>
        <input
          className="w-full p-2 rounded-md text-gray-900"
          type="text"
          id="coupon"
          name="coupon"
          required
          minLength={5}
        />
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="name">Discount %</label>
        <input
          className="w-full p-2 rounded-md text-gray-900"
          type="number"
          id="discount"
          name="discout"
          defaultValue={10}
          min={1}
          max={100}
          required
        />
      </div>

      <div className="text-center mt-4">
        <button className="p-2 shadow-md border border-white rounded-xl">
          Submit
        </button>
      </div>
    </form>
  );
}

export default DealForm;
