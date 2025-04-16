// In a little house where wild winds play,
// Lives [First Name] [Last Name] day by day.
// Among the trees, the birds take flight,
// Greeting the dawn with golden light.

// At [Street Address], the garden grows,
// With petals soft and gentle flows.
import React,{useState} from "react";

function Form (){
    const [address, setAddress] = useState("");
    const [favoriteColor, setfavoriteColor] = useState("");
    const [firstName,setFirstName ] = useState("");
    const[lastName, setLastName]= useState("");
    const [hobby, setHobby] = useState ("");
    const [pitName , setPitName] = useState ("");
    const [isSubmitted ,setIsSUbmitted] = useState(false);
    

    const handleSubmite = (e) => {
        e.preventDefault();
        if(!address || !favoriteColor ||!firstName || !lastName || !hobby || !pitName){
           alert("please fill form fields ")
           setIsSUbmitted(false);
            
        }
        else{
            alert("form submitted")
            setIsSUbmitted(true);
        }
    }

 const renderPoem =  () => {
    if(!isSubmitted){
        return <em>Fill in the from to reveal your poem 💚.....</em>
        
    }
    return (
        <p> At {firstName} {lastName}🌟 s home,{address} 📍🏡 is where,
        The world is painted in {favoriteColor} 🖤🎨, calm and fair.
        With {hobby}🎯  in hand, their heart beats true,
        And {pitName}🐶 🐾 by their side, adventures pursue 🌈.</p>

    );
 };
    return(
        <>
         <h3 className="text-center">Your Nature Poem 🌿</h3>
         <div className="text-center">{renderPoem()}</div>
        <div className=" px-8 py-10 flex gap-10 flex-col  font-bold px-30 py-30  flex justify-center items-center  w-auto">
            <form className="bg-white shadow-2xl rounded-2xl p-10 mt-8 w-full max-w-5xl flex flex-col gap-5   border border-black lg:grid grid-cols-2" action ="submit"  onSubmit={handleSubmite}>
            <input className="p-2 border rounded-lg  " type="text" value={firstName} placeholder="Enter your first name"  onChange={(e) => setFirstName(e.target.value)}></input>
            <input className="p-2 border rounded-lg  sm:mt-0" type="text" value={lastName} placeholder="Enter your last name"   onChange={(e) => setLastName(e.target.value)}></input>
            <input  className="p-2 border rounded-lg" type="text" value={address} placeholder="Enter your address"   onChange={(e) => setAddress(e.target.value)}></input>
            <input  className="p-2 border rounded-lg" type="text" value={favoriteColor} placeholder="Enter your favorite color 🖤"   onChange={(e) => setfavoriteColor(e.target.value)}></input>
            <input  className="p-2 border rounded-lg" type="text" value={hobby} placeholder="Enter your hobby"   onChange={(e) => setHobby(e.target.value)}></input>
            <input  className="p-2 border rounded-lg " type="text" value={pitName} placeholder="Enter your pet name"   onChange={(e) => setPitName(e.target.value)}></input>
            <div className="col-span-2 flex justify-center">
            <button type="submit" className="mt-4 bg-green-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-800 col-span-2 w-72">Submit</button>
            </div>
             </form>
        </div>
        </>
    )
}
export default Form ;
