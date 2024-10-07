import React from 'react';

const Details = () => {
  return (
    <section className="bg-gray-950 py-12 text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Quick Contact Address</h2>
        <p className="text-gray-400 mt-2">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {/* Phone Numbers */}
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-3xl text-blue-400 mb-4">
            <i className="fas fa-headphones"></i>
          </div>
          <h4 className="text-xl font-semibold mb-2">Our Phone Numbers</h4>
          <p>+444 555 666 777</p>
          <p>+222 222 222 333</p>
        </div>

        {/* Email Addresses */}
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-3xl text-blue-400 mb-4">
            <i className="fas fa-envelope"></i>
          </div>
          <h4 className="text-xl font-semibold mb-2">Our Email Address</h4>
          <p>admin@gmail.com</p>
          <p>example@gmail.com</p>
        </div>

        {/* Location */}
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-3xl text-blue-400 mb-4">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h4 className="text-xl font-semibold mb-2">Our Location</h4>
          <p>5678 Bangla Main Road, cities 580</p>
          <p>GBnagla, example 54786</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
