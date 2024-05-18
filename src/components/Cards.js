import React from 'react'
import Card from './Card'
import image1 from '../Assets/images.png'
import image2 from '../Assets/Nginx-Logo-02.png'
import image3 from '../Assets/react.png'

const cards = [
 {
   id:1, 
   title: 'JavaScript',
   image: image1,
   instructor: 'Lalo Landa',
   url: 'https://cssgradient.io/'
 },
 {
    id:2, 
    title: 'Nginx',
    image: image2,
    instructor: 'Samuel',
    url: 'https://google.com/'
  },
  {
    id:1, 
    title: 'React',
    image: image3,
    instructor: 'DD',
    url: 'https://www.amazon.com.mx/'
  }

]
export default function Cards() {
  return (
    <div className='container dflex justify-content aling-item-center h-100'>Este es un conjunto de tarjetas
        <div className='row'>
          {
            cards.map(c => (
                <div className='col-md-4' key={cards.id}>
                    <Card
                    key={c.id}
                    id={c.id}
                    title={c.title}
                    image={c.image}
                    instructor={c.instructor}
                    url={c.url}
                    />
                    </div>
            ))
          }
        </div>
       
    </div>
  )
}
