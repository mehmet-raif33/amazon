import React from 'react'

function Footer() {
  return (
    <footer className='flex flex-col bg-slate-300 py-10'>
        <h2 className='text-center my-2 bg-slate-200 mb-5'>
            İletişim Bilgileri
        </h2>
        <div className='flex justify-around flex-row'>
            <div>
                <ul>
                    <li>
                        İletişim 1
                    </li>
                    <li>
                        İletişim 2
                    </li>
                    <li>
                        İletişim 3
                    </li>
                    <li>
                        İletişim 4
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        İletişim 5
                    </li>
                    <li>
                        İletişim 6
                    </li>
                    <li>
                        İletişim 7
                    </li>
                    <li>
                        İletişim 8
                    </li>
                </ul>
            </div> 
        </div>
        
    </footer>
  )
}

export default Footer