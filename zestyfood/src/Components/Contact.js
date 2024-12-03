const Contact = () => {
    return (
      <div className="bg-gradient-to-br from-purple-50 to-pink-100 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl w-full bg-gradient-to-r from-white to-purple-50 shadow-2xl rounded-3xl p-10 border-2 border-purple-200">
          {/* Header */}
          <h1 className="text-5xl font-extrabold text-center text-purple-700 mb-6">
            Contact Us 📞
          </h1>
          <p className="text-lg text-center text-gray-700 mb-8">
            Have questions, need help, or want to connect with us? We’d love to hear from you!
          </p>
  
          {/* Contact Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* General Help */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Need Help?</h2>
              <p className="text-gray-700 mb-2">
                <span className="font-bold text-purple-600">Email:</span> mohdzeeshanmohammad@gmail.com
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-bold text-purple-600">Call:</span> +91-72910809XX
              </p>
              <p className="text-gray-700">
                <span className="font-bold text-purple-600">Address:</span> D-Block, Area-34, Noida Park, near Sector-15 Metro Station
              </p>
            </div>
  
            {/* Specific Inquiries */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Specific Inquiries</h2>
              <p className="text-gray-700 mb-2">
                <span className="font-bold text-purple-600">Food Quality:</span> community@zestyfood.com
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-bold text-purple-600">Partnerships:</span> partnership@zestyfood.com
              </p>
            </div>
          </div>
  
          {/* Phishing Scams Warning */}
          <div className="bg-purple-100 p-6 rounded-xl shadow-lg border-l-4 border-purple-600">
            <h2 className="text-xl font-semibold text-purple-800 mb-2">⚠️ Beware of Phishing Scams</h2>
            <p className="text-gray-700">
              Please note that official communication from our team will only come from our verified accounts:
            </p>
            <p className="text-gray-700 mt-2">
              Instagram: <span className="font-bold text-purple-600">@ZestyFood</span>
            </p>
            <p className="text-gray-700">
              YouTube: <span className="font-bold text-purple-600">@ZestyFood-YourTaste</span>
            </p>
          </div>
  
          {/* Footer Message */}
          <div className="text-center mt-8">
            <h2 className="text-3xl font-bold text-purple-700 mb-4">We’re Here for You!</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you have a query or need assistance, feel free to reach out. Your satisfaction is our priority!
            </p>
            <p className="mt-6 text-xl font-bold text-purple-600">- The ZestyFood Team</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  
  












/////////////////////////////////////////////////////

//old code


// const Contact =()=>{
//     return (
//         <div> <div className="bg-[#F1E8E4] font-semibold m-4">
//         <p className="text-red-700 text-3xl text-center ">
//         Are you looking for help to place an order or <br></br><span>
//         have questions about an existing order?</span> 
//         </p>
//         <h2 className="text-xl text-center m-4 ">Email us at mohdzeeshanmohammad@gmail.com</h2>
//         <h2 className="text-xl text-center m-2 ">Call us : +91-72910809xx</h2>
//         <h2 className="text-xl text-center m-2 ">Postal Address : D-Block Area-34 Noida Park near,Sector-15 Metro Station </h2>
//         <p className="text-red-700 text-3xl text-center m-4">Otherwise...</p>
//         <h2 className="text-xl text-center m-2 ">Be aware of phishing scams. Please note that outreach from our team will be conducted through our
//         <br></br> official social accounts (Intagram: @Zestyfood,
//             Youtube : @ZestyFood-Yourtaste) only
//         </h2>
//         <h2 className="text-xl text-center m-2 ">For Food Quality related inquiries. please send us an email to:
//             community @zestyfood.com
//         </h2>
//         <h2 className="text-xl text-center m-2 ">For partnership inquiries , please send an email to : partnership@zestyfood.com</h2>
//     </div>
//     </div>
//     )
// }

// export default Contact;