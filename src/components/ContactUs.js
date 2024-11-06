
const ContactUs = ()=>{
  return (
    <div className="h-screen bg-orange-50 font-serif pt-16">
   <div>
      <div className="text-center font-bold text-xl md:text-3xl">Contact</div>
      <div className="text-center text-sm font-extralight text-slate-600">Our Team is always Ready to help you. Mention your queries below.</div>
   </div>
   <div className="m-auto left-0 right-0 md:w-1/2 w-11/12 mt-10 border-[1px] border-transparent shadow-lg p-4">
    <div>Name:<input className="w-3/4  mb-11 ml-5  rounded-md text-sm" placeholder="Enter Name"></input> </div>
    <div>Email:<input className="w-3/4 mb-11 ml-5 rounded-md text-sm" placeholder="Enter Email"></input></div>
    <div>Query:<input className="w-3/4 pb-11 ml-5 rounded-md text-sm" placeholder="Message"></input></div>
   </div>
   <div className="flex justify-center mt-5">
   <button className="bg-green-700 py-2 px-4 rounded-md text-slate-50 font-bold text-sm" >submit</button>
   </div>
   </div>
  )
}

export default ContactUs;