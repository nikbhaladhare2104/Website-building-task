import React, { useState } from 'react'
const Contact = () => {

    const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/upload");
    // console.log(formData); // You can handle form submission here
  };
  return (
    <section className='px-[5%] my-[30px] '>
        <div className='flex flex-col mx-3 my-5'>
          <p className='text-[36px] font-bold text-blue-700'> Let's Connect</p>
          <p className='text-[16px] text-gray-500'>Sign in to your account</p>
        </div>
        <form onSubmit={handleSubmit} className=" bg-gray-100 rounded-[10px]">
      
            <div className='mt-4 rounded-[10px] px-3 py-3 w-full'>
                <div className='flex w-full gap-3'>

                  <div className='flex flex-col w-full'>
                    <label className='text-[16px] w-full'>Full Name <span className='text-red-700'>*</span> </label>
                    <input
                        type="text"
                        required
                        placeholder='John Doe'
                        onChange={handleChange}
                        className='pl-4 bg-input_box h-[44px] rounded-[10px] mt-2' />
                  </div>
                   <div className='flex flex-col w-full'>
                      <label className='text-[16px]'>Email <span className='text-red-700'>*</span></label>
                      <input
                          type="email"
                          required
                          placeholder='johndoe@gmail.com'
                          className='pl-4  h-[44px] rounded-[10px] mt-2' />
                   </div>
                   <div className='flex flex-col w-full'>
                      <label className='text-[16px]'>Contact Number <span className='text-red-700'>*</span></label>
                      <input
                          type="number"
                          required
                          placeholder='9876543210'
                          className='pl-4 h-[44px] rounded-[10px] mt-2' />
                   </div>
              
                </div>
                <div className='flex flex-col w-full mt-5'>
                      <label className='text-[16px]'>Subject <span className='text-red-700'>*</span></label>
                      <input
                          type="text"
                          required
                          placeholder='Want to know about AI '
                          className='pl-4 h-[44px] rounded-[10px] mt-2' />
                 </div>

                 <div className='flex flex-col w-full mt-5'>
                      <label className='text-[16px]'>Message <span className='text-red-700'>*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        className='pl-4 rounded-[10px]'
                        rows="6" // Adjust the number of rows as needed for the desired size
                        // style={{ resize: 'none' }} // Prevent textarea resizing by the user
                      />
                 </div>

                <button 
                  className= 'flex text-[20px] text-white my-8 w-[20%] h-10 justify-center items-center bg-primary rounded-[10px] cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300'
                  onClick={() => handleSubmit}
                >
                  Submit Form
                </button>
            </div>

      </form>
    </section>
  )
}

export default Contact