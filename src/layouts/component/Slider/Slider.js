/* eslint-disable array-callback-return */
import { useState } from 'react';

import { dataSlider } from './dataSlider';
import './Slider.scss';

function Slider() {
  const [indexImage, setIndexImage] = useState(0);
  const lengthDataSlider = dataSlider.length;

  function nextSlider() {
    if (indexImage < lengthDataSlider - 1) {
      setIndexImage(indexImage + 1);
    } else setIndexImage(0);
  }
  function prevSlider() {
    if (indexImage === 0) {
      setIndexImage(lengthDataSlider - 1);
    } else setIndexImage(indexImage - 1);
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     nextSlider();
  //   }, 4000);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [indexImage]);

  return (
    <div className="wrapper">
      {dataSlider.map((data, index) => {
        if (indexImage === index) {
          return (
            <div key={index}>
              <img className="image" src={data.image} alt="anh slideshow" />
            </div>
          );
        }
      })}

      <button className="btn-slider" onClick={prevSlider}>
        Prev
      </button>
      <button className="btn-slider" onClick={nextSlider}>
        Next
      </button>
      <div className="container-dots">
        {Array.from({ length: lengthDataSlider }).map((dot, index) => (
          <div
            key={index}
            onClick={() => setIndexImage(index)}
            className={index === indexImage ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
