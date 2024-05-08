import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const summaryStyle: React.CSSProperties = {
  outline: 'none',
  cursor: 'pointer',
  margin: 0,
  listStyleType: 'none', // This line removes the default bullet point
};

const Faqs: React.FC = () => {
  return (
    <section className="bg-[#010E27] text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <div className="flex flex-col divide-y divide-gray-700">
          <details>
            <summary style={summaryStyle} className="py-2 outline-none flex justify-between cursor-pointer">
              <h1 className='w-[90%] text-white/60'>Company & Team</h1>
              <span className=''><IoIosArrowDown size={25}/></span>
            </summary>
            <div className="pb-4">
              <ul className='text-sm cursor-pointer'>
                <li>About</li>
                <li>FAQ</li>
                <li>How it Works</li>
                <li>Contacts</li>
                <li>Blog</li>
                <li>Mobile Apps</li>
                <li>Reviews</li>
              </ul>
            </div>
          </details>

          {/* Additional details elements */}

        </div>
      </div>
    </section>
  );
}

export default Faqs;
