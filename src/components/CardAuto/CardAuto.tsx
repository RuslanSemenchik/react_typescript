
import './styles.css'

interface CarComponent{
     brand: string;
     price: number;
     isDiesel: boolean;

}
function CardAuto (

  { brand = "", price = 0, isDiesel  }:CarComponent
  
  ) {
  return (
    <div className="cardAuto_components">

        <p className="card_info">
        <span className="card_title">Brand: </span>
        {brand}
      </p>
      
      <p className="card_info">
        <span className="card_title">Price: </span>
        {price}
      </p>
      
      <p className="card_info">
        <span className="card_title">IsDiesel: </span>
        {isDiesel ? "Yes" : "No"}
      </p>
    
    </div>
  );
}

export default CardAuto