const Card = () => {
    
    const barrioDetail = [
        {
          name: 'Nou Barris',
          alquiler: 250,
          actividad: 'feria de productos locales',
          centroComercial: 'Diagonal'
        }
      ];
    
    return (
        <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
                <h2 className="card-title">Nou Barris</h2>
          <div className="">
            {barrioDetail.map((d, index) => (
              <div key={index}>
                <div className="font-bold text-neutral-50"><p>Quieres conocer más a nuestro barrio?</p></div>
                <p className="">{d.centroComercial}</p>
                <p className="">{d.actividad}</p>
                <p className="">{d.alquiler}</p>
              </div>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button className="btn">Mas Info</button>
          </div>
        </div>
      </div>
          
       
            
      );














}
export default Card;