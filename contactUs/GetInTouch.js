import React from "react";

const GetInTouch = () => {
  return (
    <div>
      <div className="py-10 md:py-12 max-w-6xl px-6 mx-auto">
        <div className="py-4">
          <h2 className="text-blue-700 text-lg font-s-bold text-center">
            Contact Us
          </h2>
          <h2 className="text-3xl font-s-bold text-center">Get in Touch</h2>
        </div>
        <div className="md:grid md:grid-cols-12 gap-20 items-center">
          <div className="md:col-span-7 space-y-4 md:pt-0 pt-4">
            <div className="flex justify-center space-x-4">
              <div className="flex justify-start flex-col space-y-1 w-full">
                <input type="text"
                  className="w-full border-2 border-inputcolor placeholder:text-gray-400 outline-none px-3 py-2   rounded-[7px]"
                  placeholder="Enter Your Name"/>
              </div>
              <div className="flex justify-start flex-col space-y-1 w-full">
                <input type="text"
                  className="w-full border-2 border-inputcolor placeholder:text-gray-400 outline-none px-3 py-2   rounded-[7px]"
                  placeholder="Company (optional)"/>
              </div>
            </div>
            <div className="flex justify-center space-x-4 pt-5">
              <div className="flex justify-start flex-col space-y-1 w-full">
              <input type="text"
                  className="w-full border-2 border-inputcolor placeholder:text-gray-400 outline-none px-3 py-2   rounded-[7px]"
                  placeholder="Your Email"/>
              </div>
              <div className="flex justify-start flex-col space-y-1 w-full rounded-[7px]">
                 <input type="text"
                  className="w-full border-2 border-inputcolor placeholder:text-gray-400 outline-none px-3 py-2   rounded-[7px]"
                  placeholder="Mobile Number"/>
              </div>
            </div>

            <div className="pt-5">
              <textarea
                name="w3review"
                rows="4"
                cols=""
                className="w-full border-2 border-inputcolor outline-none placeholder:text-gray-400 rounded-[7px] px-3 py-2 "
                placeholder="Tell us about yourself"
              />
            </div>
            <div className="pt-5">
            <input type="checkbox" id="terms" name="terms" value="TermsCondition" />
  <label for="terms"> Agree with Terms & Conditions</label>
            </div>

            <div className="flex justify-start pt-5">
              <button className="bg-secondary rounded-md px-12 py-2 text-white">
                {" "}
                Send Message{" "}
              </button>
            </div>
          </div>
          <div className="md:col-span-5">
            <img src="/assets/images/contactpage.png" className="md:max-w-md" />
          </div>
        </div>

       
        <div className="pt-12">
        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.07714707777!2d76.71911353227584!3d28.422992037880523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1676893980242!5m2!1sen!2sin" height="450" ></iframe>
        </div>
        
      </div>
    </div>
  );
};

export default GetInTouch;
