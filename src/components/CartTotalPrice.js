
CartTotalPrice = (props)=>{
  let totalPrice = 0 ;
const {items} = props;
{
  items.map((item)=>{
    const{price} = item?.card?.info;
    totalPrice += (price/100);
  });

  return (
    <div className="border-[1px] w-[500px] rounded-md shadow-md ml-[145px] p-2">
      <div className="text-left font-medium">Bill Details</div>
      <div className="flex justify-between text-sm text-slate-600">
        <div>Item Total</div>
        <div>&#8377;{totalPrice}</div>
      </div>
      <div className="border-[1px] my-3"></div>
      <div className="flex justify-between text-sm text-slate-600">
        <div>Extra discount for you</div>
        <div>-&#8377;5</div>
      </div>
      <div className="flex justify-between text-sm text-slate-600">
        <div>Delivery Fee</div>
        <div>&#8377;43</div>
      </div>
      <div className="border-[1px] my-3"></div>
      <div className="flex justify-between text-sm text-slate-600">
        <div>Platform Fee</div>
        <div>&#8377;6</div>
      </div>
      <div className="flex justify-between pb-2 text-sm text-slate-600">
        <div>GST and Restaurant Charges</div>
        <div>&#8377;36</div>
      </div>
      <div className="border-[1px] border-black my-3"></div>
      <div className="flex justify-between font-bold text-black pb-2 text-sm">
        <div>Total</div>
        <div>&#8377;{totalPrice-5+43+6+36}</div>
      </div>
    </div>
  );
}
}

export default CartTotalPrice;