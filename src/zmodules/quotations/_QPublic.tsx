//src/zmodules/quotations/_QPublic.tsx
import { type FC } from 'react'

const PublicQuotation: FC = () => {
  return (
    <div className="text-[#0033ff] relative min-h-screen">
      <div className="max-w-[800px] mx-auto px-10 py-10 pb-[200px]">
        <div className="mb-10">
          <h1 className="text-3xl mb-5">Your Pet is Being Taken<br />Care By Professionals!</h1>
          <div className="border-b-2 border-[#0033ff] border-wavy w-1/2 my-2.5" />
          <p>
            Lorem ipsum dolor sit amet, consecteturus adipiscing,<br />
            sed do eiusmod tempor incim consectetur elit<br />
            magna ut uddidunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="absolute top-10 right-10 flex flex-col items-end gap-2.5">
          <div className="bg-white border-2 border-[#0033ff] rounded-2xl px-4 py-1.5">Hi!</div>
          <div className="flex flex-col gap-1.5">
            {[1, 2].map((i) => (
              <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#0033ff">
                <path d="M12 2C7.58 2 4 5.58 4 10c0 2.03.76 3.87 2 5.28V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-4.72c1.24-1.41 2-3.25 2-5.28 0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
              </svg>
            ))}
          </div>
        </div>

        <div className="flex justify-between mb-10">
          <div>
            <h2 className="font-bold">Mrs. Anne Lee</h2>
            <p>Adress Line · Country</p>
            <p>Date: DD/MM/YY</p>
          </div>
          <div>
            <h2 className="font-bold">Invoice</h2>
            <p>Invoice Number:</p>
            <p>12345678910</p>
          </div>
        </div>

        <div className="border-b-2 border-[#0033ff] my-5" />

        <div className="flex justify-between mb-5">
          <h2 className="font-bold">Product Description:</h2>
          <h2 className="font-bold">Price List</h2>
        </div>

        <div className="mb-10">
          {[
            { name: '30kg Big Dog Food', price: 90 },
            { name: '20kg Small Dog Food', price: 120 },
            { name: 'Yellow Big Cat Toy', price: 100 },
            { name: 'White Small Dog Toy', price: 60 },
            { name: '10kg Small Cat Food', price: 80 }
          ].map((item, i) => (
            <div key={i} className="flex justify-between mb-4">
              <span>{item.name}</span>
              <div className="flex-grow mx-4 border-b border-[#0033ff] relative top-[-5px]" />
              <span>${item.price}</span>
            </div>
          ))}
        </div>

        <div className="border-b-2 border-[#0033ff] my-5" />

        <div className="flex justify-between mt-5 font-bold">
          <p>Lorem ipsum dolor sit amet magna.</p>
          <p>Total $450</p>
        </div>
      </div>

      <footer className="absolute bottom-0 w-full">
        <div className="flex justify-center gap-10 mb-10 p-5">
          <span>www.yourwebsite.com</span>
          <span>Follow us on:</span>
          <span>@username</span>
        </div>
        <div className="bg-[#0033ff] text-white p-10 w-full flex items-center justify-center gap-2.5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C7.58 2 4 5.58 4 10c0 2.03.76 3.87 2 5.28V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-4.72c1.24-1.41 2-3.25 2-5.28 0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
          </svg>
          <span>LOGO</span>
        </div>
      </footer>
    </div>
  )
}

export default PublicQuotation